import React, { Component } from 'react';


const PxtoNum = (pxString) => { return Number(pxString.match(/(.*)px/)[1]) }

const rule = {
    scale: (string) => {
        if (string) return Number(string.match(/scale\(([^)]+)\)/)[1])
        return 1
    },
    translate: (string) => {
        if (string) {
            var strSplit = string.match(/translate\(([^)]+)\)/)[1].split(', ')
            return [PxtoNum(strSplit[0]), PxtoNum(strSplit[1])]
        }
        return [1, 1]
    }
}

const styles = {
    node: {
        borderRadius: 2, border: '3px solid white', background: '#333333', position: 'absolute', zIndex: 1, minWidth: 100,
        minHeight: 50,
        color: '#eeeeee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export class Blueprint extends Component {

    state = {
        open: false
    }

    constructor(props) {
        super(props)
        this.deltaX = 0
        this.deltaY = 0
        this.mouseX = 0
        this.mouseY = 0
        this.scale = 1
        this.x = 1
    }


    componentDidMount() {
        this.initWidth = this.wrapper.getBoundingClientRect().width
        this.initHeight = this.wrapper.getBoundingClientRect().height
        this.containerWidth = this.container.getBoundingClientRect().width
        this.containerHeight = this.container.getBoundingClientRect().height
        window.addEventListener('keypress', this.handleKeypress)
    }

    handleMouseMove = (e) => {
        e = e || window.event
        e.preventDefault()
        e.stopPropagation();

        this.deltaX = this.mouseX - e.clientX;
        this.deltaY = this.mouseY - e.clientY;
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        var maxTop = (this.scale - 1) * this.initHeight / 2
        var maxLeft = (this.scale - 1) * this.initWidth / 2
        var minLeft = maxLeft - this.wrapper.getBoundingClientRect().width + this.containerWidth
        var minTop = maxTop - this.wrapper.getBoundingClientRect().height + this.containerHeight
        this.wrapper.style.top = Math.min(Math.max(this.wrapper.offsetTop - this.deltaY, minTop), maxTop) + 'px'
        this.wrapper.style.left = Math.min(Math.max(this.wrapper.offsetLeft - this.deltaX, minLeft), maxLeft) + 'px'

    }

    handleMouseDown = (e) => {
        e = e || window.event
        e.preventDefault()
        e.stopPropagation();
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        document.onmousemove = this.handleMouseMove
        document.onmouseup = this.handleMouseUp

    }

    componentWillUnmount() {
        document.onmousemove = null
        document.onmouseup = null
    }

    handleMouseUp = () => {
        document.onmousemove = null
        document.onmouseup = null
    }

    handleMouseWheel = (e) => {
        if(e.altKey){
            this.scale = Math.max(rule.scale(this.wrapper.style.transform) - 0.0005 * e.deltaY, 0.5)
            this.wrapper.style.transform = `scale(${this.scale})`
        }
        
    }

    handleKeypress = (e) => {
        switch(e.key){
            case 'f':
                this.scale = 1;
                this.wrapper.style.top = '-450%'
                this.wrapper.style.left = '-450%'
            case 't':
                this.container.style.opacity = this.container.style.opacity === '1' ? 0.5 : 1
        }
    }

    setTooltip = (data) => {
        if(typeof data === 'object') data = this.TooltipToHTML(data)
        this.tooltip.innerHTML = data
    } 

    TooltipToHTML = (json) => {
        return Object.keys(json).map(key => { return `<p> ${key} : <span style="color:#b2ebf2"> ${json[key]} <span> </p>` }).join('')
    } 

    render() {
        return (

            <React.Fragment>
                <div style={{ 
                    position: 'fixed', bottom: 10, left: 10,  width:60, height:40, boxSizing:'border-box',  background: 'linear-gradient(146deg, rgb(0,0,0) 0%, rgb(57,57,57) 58%, rgb(98,98,98) 100%)', zIndex:10,  textAlign:'center', verticalAlign:'middle',  color:'#eeeeee', borderRadius:5,
                     boxShadow:'5px 4px 24px -3px rgba(0,0,0,0.69)',
                     display:'flex', 
                     justifyContent:'center', 
                     alignItems:'center', userSelect:'none',
                     fontFamily:'Skia'
                    }} onClick={() => this.setState({ open: !this.state.open })}>
                        {this.state.open ? 'X' : '<ASM>'}
                </div>

                <div style={{ overflow: 'hidden', top: 0, left: 0, zIndex: 0, 
                    width: this.state.open ? '100%' : 0, height: this.state.open ? '100%' : 0 , 
                    background: 'rgba(0,0,0,0.2)', position: 'fixed' }}
                     ref={ref => this.container = ref}>
                    <div style={{ 
                        position: 'absolute', 
                        top: 10, left: 10 , 
                        minWidth: 150, minHeight:100, 
                        color:'white', background:'rgba(0,0,0,0.5)', zIndex: 1, 
                        display:'flex', flexDirection:'column', justifyContent:'center',  borderRadius: 5,  fontSize:12, padding:10}} ref={ref => this.tooltip =ref}>
                    </div>
                    <div style={{ 
                        position: 'absolute', 
                        top: 10, right: 10 , 
                        minWidth: 200, minHeight:50, 
                        color:'white', background:'rgba(0,0,0,0.5)', zIndex: 1, 
                        display:'flex', flexDirection:'column', justifyContent:'center',  borderRadius: 5,  fontSize:12, paddingLeft:5}} ref={ref => this.shortcut =ref}>
                            <p>Navigation:</p>
                            <p>F: zoom origin</p>
                            <p>T: toggle transparency</p>
                            <p>ZOOM: Alt + MouseWheel</p>
                    </div>
                    <div style={{
                        position: 'relative',
                        width: '1000%',
                        height: '1000%',
                        cursor: 'move',
                        top: '-450%',  // (2000 - 100) / 2
                        left: '-450%', // (2000 - 100) / 2
                        transform: 'scale(1)',
                        transformOrigin: '50% 50%',
                        background: '#aaaaaa',
                        zIndex: 0
                    }}
                        ref={ref => this.wrapper = ref}
                        onWheel={this.handleMouseWheel}
                        onMouseDown={this.handleMouseDown}
                    >
                        <svg
                            width='100%'
                            height='100%'
                            style={{ maxHeight: '100%', position: 'absolute', zIndex: -1, width: '100%' }}
                        >
                            <defs>
                                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5" />
                                </pattern>
                                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                    <rect width="80" height="80" fill="url(#smallGrid)" />
                                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export class Node extends Component {


    static defaultProps = {
        initX: 0,
        initY: 0
    }

    constructor(props) {
        super(props)
        this.pos1 = 0
        this.deltaY = 0
        this.mouseX = 0
        this.mouseY = 0
        this.scale = 1
    }

    componentDidMount() {
        document.onmousemove = null
        document.onmouseup = null
        this.wrapper.style.transform = `translate(${this.props.x}px, ${this.props.y}px)`
        this.translate = rule.translate(this.wrapper.style.transform)
    }

    handleMouseMove = (e) => {
        this.scale = rule.scale(this.wrapper.parentNode.style.transform)
        e = e || window.event
        e.preventDefault()
        e.stopPropagation();
        this.deltaX = this.mouseX - e.clientX;
        this.deltaY = this.mouseY - e.clientY;
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.wrapper.style.top = (this.wrapper.offsetTop - this.deltaY / this.scale) + 'px'
        this.wrapper.style.left = (this.wrapper.offsetLeft - this.deltaX / this.scale) + 'px'

    }

    handleMouseDown = (e) => {
        e = e || window.event
        e.preventDefault()
        e.stopPropagation();
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        document.onmousemove = this.handleMouseMove
        document.onmouseup = this.handleMouseUp
        if(this.props.onFocus) this.props.onFocus()
    }

    componentWillUnmount() {
        document.onmousemove = null
        document.onmouseup = null
    }

    handleMouseUp = () => {
        document.onmousemove = null
        document.onmouseup = null
    }

    getLocation = () => {
        this.scale = rule.scale(this.wrapper.parentNode.style.transform)
        var x = this.wrapper.offsetLeft +
        this.wrapper.getBoundingClientRect().width / 2 / this.scale + this.translate[0]
        var y = this.wrapper.offsetTop +
        this.wrapper.getBoundingClientRect().height / 2 / this.scale + this.translate[1]
        return [x, y]
    }

    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        ...styles.node,
                        top: '50%',
                        left: '50%',
                        ...this.props.style,
                        transformOrigin: '50% 50%',
                        scale: '',
                        transform: '',
                        userSelect:'none'
                    }}
                    onMouseDown={this.handleMouseDown}
                    ref={ref => this.wrapper = ref}
                >
                    {this.props.title}
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


