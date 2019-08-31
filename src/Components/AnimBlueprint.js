import React, { useState, Component } from 'react';
import propTypes from 'prop-types';
import {Sun, Moon, Move} from 'react-feather'

const lightModePallete = {
    node: {
        background: '#4C566A',
        color: '#D8DEE9',
        border: '#00e5ff',
        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
    },
    line: {
        stroke: '#81A1C1'
    },
    grid: {
        background: '#e0e0e0',
        smallGrid: '#ccd1db',
        bigGrid: '#c7ccd6'
    },
    tooltip: {
        background: 'rgba(77, 78, 87, 0.95)',
        color: '#D8DEE9',
        colorSpan: '#c5e3fc',
        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
    }
}

const darkModePallete = {
    node: {
        background: '#51565c',
        color: '#eeeeee',
        border: '#7fc2c9',
        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
    },
    line: {
        stroke: '#dddddd'
    },
    grid: {
        background: '#27272e',
        smallGrid: '#222222',
        bigGrid: '#1f1f1f'
    },
    tooltip: {
        background: 'rgba(152, 156, 166, 0.95)',
        color: '#27272e',
        colorSpan: '#0c274e'
    }
}
var colors = {
    ...darkModePallete
}

const wordSplitUpper = (str) => {
    var newstr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newstr += ` ${str[i]}`
        }
        else newstr += str[i].toUpperCase()
    }
    return newstr
}
const Vec = {
    normalize: (vec) => {
        var len = Math.sqrt(vec[0] ** 2 + vec[1] ** 2) || 1
        return [vec[0] / len, vec[1] / len]
    },
    add: (vec1, vec2) => {
        return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
    },
    subtract: (vec1, vec2) => {
        return [vec1[0] - vec2[0], vec1[1] - vec2[1]]
    },
    multiply: (vec, factor) => {
        return [vec[0] * factor, vec[1] * factor]
    }
}

const Line = ({ onHover, onLeave, ...props }) => {
    const { start, end } = props
    const [strokeWidth, setStrokeWidth] = useState(3)
    return <line x1={start ? start[0] : '50%'} y1={start ? start[1] : "50%"}
        x2={end ? end[0] : 0} y2={end ? end[1] : 0}
        style={{ transition: '100ms' }}
        stroke={colors.line.stroke} strokeWidth={strokeWidth}
        strokeLinecap='round'
        {...props}
        onMouseEnter={(e) => { setStrokeWidth(6); if (onHover) onHover(e) }}
        onMouseLeave={(e) => { setStrokeWidth(3); if (onLeave) onLeave(e) }}

    />
}

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




class Blueprint extends Component {

    state = {
        open: true,
        darkMode: true,
    }

    constructor(props) {
        super(props)
        this.window = props.window
        this.deltaX = 0
        this.deltaY = 0
        this.mouseX = 0
        this.mouseY = 0
        this.scale = 1
        this.x = 1
        
    }

    init = () => {
        this.initWidth = this.wrapper.getBoundingClientRect().width
        this.initHeight = this.wrapper.getBoundingClientRect().height
        this.containerWidth = this.container.getBoundingClientRect().width
        this.containerHeight = this.container.getBoundingClientRect().height

        this.originX = (this.window.innerWidth - this.initWidth) / 2
        this.originY = (this.window.innerHeight - this.initHeight) / 2
     }
    componentDidMount() {
        this.init()
        
    }

    handleMouseMove = (e) => {
        e = e || this.window.event
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
        e = e || this.window.event
        e.preventDefault()
        e.stopPropagation();
        if (this.props.onClick) this.props.onClick()
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        this.window.document.onmousemove = this.handleMouseMove
        this.window.document.onmouseup = this.handleMouseUp

    }

    componentWillUnmount() {
        this.window.document.onmousemove = null
        this.window.document.onmouseup = null
    }

    handleMouseUp = () => {
        this.window.document.onmousemove = null
        this.window.document.onmouseup = null
    }

    handleMouseWheel = (e) => {
        if (e.altKey) {
            this.scale = Math.max(rule.scale(this.wrapper.style.transform) - 0.0005 * e.deltaY, 0.3)
            this.wrapper.style.transform = `scale(${this.scale})`
        }
    }

    setTooltip = (data, x, y) => {
        if (!data) this.tooltipBar.style.display = 'none'
        else this.tooltipBar.style.display = 'flex'
        if (typeof data === 'object') data = this._tooltipToHTML(data)
        this.tooltipBar.innerHTML = data
        this.tooltipBar.style.top = y - 30
        this.tooltipBar.style.left = x + 30

    }

    _tooltipToHTML = (json) => {
        return Object.keys(json).map(key => { return `<div style="width:90%; font-weight: 700;"> ${wordSplitUpper(key)} : <span style="color:${colors.tooltip.colorSpan}; font-size:14; font-weight: 600;float: right"> ${json[key]} <span> </div>` }).join('')
    }

    renderTooltip = () => {
        return <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            boxShadow: colors.tooltip.boxShadow,
            minWidth: 150, minHeight: 100,
            color: colors.tooltip.color, background: colors.tooltip.background, zIndex: 1, userSelect: 'none',
            display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 5, fontSize: 12, paddingLeft: 5
        }} ref={ref => this.tooltipBar = ref}>
        </div>
    }

    renderBtnCenterNav = () => {
        const {darkMode} = this.state
        return <div style={{
            margin: 2,
            boxShadow: '0 1px 5px rgba(0,0,0,0.5)',
            cursor:'pointer',
            zIndex: 1, userSelect: 'none',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontSize: 12, padding:10
        }}  
            onClick={(e) => {  this.wrapper.style.transform = 'scale(1)'; this.wrapper.style.top = this.originY; this.wrapper.style.left = this.originX}}
            ref={ref => this.centerNav = ref}>
            <Move stroke={darkMode ? '#eeeeee' : '#333333'}></Move>
        </div>
    }
    renderDarkLightSwitch = () => {
        const {darkMode} = this.state
        return <div style={{
            margin: 2,
            boxShadow: '0 1px 5px rgba(0,0,0,0.5)',
            background: darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
            cursor:'pointer',
            zIndex: 1, userSelect: 'none',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontSize: 12, 
            padding:10
        }}  
            onClick={() => { 
                if(this.state.darkMode)
                    colors = { ...lightModePallete }
                else
                    colors = { ...darkModePallete }
            ;this.setState({darkMode: !this.state.darkMode}); }}
            >
            {this.state.darkMode ? <Sun fill='#eeeeee' stroke='#eeeeee'></Sun> : <Moon fill='#333333' stroke='#333333'/>}
        </div>
    }


    render() {
        return (
            <React.Fragment>
                <div style={{
                    top: 0, left: 0, zIndex: 0,
                    background: 'rgba(0,0,0,1)', position: 'absolute',
                    ...this.props.style,
                    overflow: 'hidden',
                    width: '100%', height: '100%',
                }}
                    ref={ref => this.container = ref}>
                    <div style={{
                            position:'fixed',  
                            top: 5, right: 5, 
                            display:'flex', flexDirection:'column', alignContent:'center', justifyContent:'center', 
                            zIndex:1,

                            }}>
                        {this.renderDarkLightSwitch()}
                        {this.renderBtnCenterNav()}
                    </div>
                    
                    {this.renderTooltip()}
                    <div style={{
                        position: 'relative',
                        minWidth: '1000%',
                        minHeight: '1000%',
                        cursor: 'move',
                        top: '-450%',  // - (totalHeight - clientHeight) / 2
                        left: '-450%', // - (totalWidth  - clientWidth) / 2
                        transform: 'scale(1)',
                        transformOrigin: '50% 50%',
                        background: colors.grid.background,
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
                                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke={colors.grid.smallGrid} strokeWidth="0.5" />
                                </pattern>
                                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                    <rect width="80" height="80" fill="url(#smallGrid)" />
                                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke={colors.grid.bigGrid} strokeWidth="1" />
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

class Node extends Component {


    static defaultProps = {
        initX: 0,
        initY: 0
    }

    constructor(props) {
        super(props)
        this.window = props.window
        this.pos1 = 0
        this.deltaY = 0
        this.mouseX = 0
        this.mouseY = 0
        this.scale = 1

    }

    componentDidMount() {

        this.window.document.onmousemove = null
        this.window.document.onmouseup = null
        this.wrapper.style.transform = `translate(${this.props.x}px, ${this.props.y}px)`
        this.translate = rule.translate(this.wrapper.style.transform)
        this.wrapper.style.top = this.wrapper.offsetTop
        this.wrapper.style.left = this.wrapper.offsetLeft
    }

    handleMouseMove = (e) => {

        this.scale = rule.scale(this.wrapper.parentNode.style.transform)
        e = e || this.window.event
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
        e = e || this.window.event
        e.preventDefault()
        e.stopPropagation();
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        this.window.document.onmousemove = this.handleMouseMove
        this.window.document.onmouseup = this.handleMouseUp

    }

    componentWillUnmount() {
        this.window.document.onmousemove = null
        this.window.document.onmouseup = null
    }

    handleMouseUp = () => {
        this.window.document.onmousemove = null
        this.window.document.onmouseup = null
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
        const { onLeave, onHover } = this.props
        return (
            <React.Fragment>
                <div
                    style={{
                        borderRadius: 2,
                        borderStyle: 'solid',
                        position: 'absolute',
                        padding: 10,
                        zIndex: 1,
                        minWidth: 100,
                        minHeight: 50,
                        color: colors.node.color,
                        display: 'flex',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        alignItems: 'center',
                        top: '50%',
                        left: '50%',
                        background: colors.node.background,
                        boxShadow: colors.node.boxShadow,
                        scale: '',
                        transform: '',
                        userSelect: 'none',

                        ...this.props.style,
                    }}
                    onMouseDown={this.handleMouseDown}
                    onMouseEnter={e => { if (onHover) onHover(e) }}
                    onMouseLeave={e => { if (onLeave) onLeave(e) }}
                    ref={ref => this.wrapper = ref}
                >
                    {this.props.title}
                </div>
            </React.Fragment>
        )
    }
}

class AnimBlueprint extends React.Component {

    constructor(props) {
        super(props);
        this.NODE_PREFIX = 'NODE_';
        this.NODE_POS_PREFIX = 'NODE_POS_';
        this.window = props.window
    }
    state = {
        selected: ''
    }

    static propTypes = {
        animNodes: propTypes.array,
        transitions: propTypes.array,

    }

    componentDidMount() {
        const { initClientWidth, initClientHeight } = this.props
        this.originX = Math.max(this.svgGrid.width.animVal.value / 2, (initClientWidth * 10 - initClientWidth) / 2)
        this.originY = Math.max(this.svgGrid.height.animVal.value / 2, (initClientHeight * 10 - initClientHeight) / 2)
        this.loop();
    }

    setActiveNode = (node) => {
        this.activeNode = node.name
    }

    initNodes = () => {
        const { animNodes } = this.props;

        return animNodes.map(node =>
            <Node key={node.getName()}
                window={this.window}
                x={Math.random() * 100} y={Math.random() * 50}
                ref={ref => this[this.NODE_PREFIX + node.getName()] = ref}
                title={node.getName()}
                onHover={(e) => { this.Blueprint.setTooltip({ 'Id': node.getName(), ...node.getData() }, e.clientX, e.clientY) }}
                onLeave={(e) => this.Blueprint.setTooltip('')}
                style={{ border: this.activeNode === node.getName() ? `3px solid ${colors.node.border}` : '3px solid transparent' }}
            />)
    }

    initLines = () => {
        const { transitions } = this.props
        return transitions.map(transition => {
            var startPoint = this.state[this.NODE_POS_PREFIX + transition.fromAnim]
            var endPoint = this.state[this.NODE_POS_PREFIX + transition.toAnim]
            if (startPoint && endPoint) {
                var vecDir = Vec.normalize([startPoint[0] - endPoint[0], startPoint[1] - endPoint[1]])
                endPoint = Vec.add(endPoint, Vec.multiply(vecDir, 70 - 25 * Math.abs(vecDir[1])))
                var offset = transition.paired ? [-vecDir[1] * 7, vecDir[0] * 7] : [0, 0]
                startPoint = Vec.add(this.state[this.NODE_POS_PREFIX + transition.fromAnim], offset)
                endPoint = Vec.add(endPoint, offset)
                return <Line
                    window={this.window}
                    key={transition.fromAnim + transition.toAnim}
                    start={startPoint}
                    end={endPoint}
                    markerEnd='url(#triangle)'
                    onHover={(e) => {
                        this.Blueprint.setTooltip(
                            {
                                id: transition.fromAnim + ' to ' + transition.toAnim,
                                Condition: transition.condition.toString().replace('() =>', ' ')
                            }, e.clientX, e.clientY);
                    }}
                    onLeave={() => {
                        this.Blueprint.setTooltip(
                            ''
                        );
                    }}
                />
            }
        }
        )
    }

    loop = () => {
        this.props.animNodes.map(node => {
            this.setState({ [this.NODE_POS_PREFIX + node.getName()]: this[this.NODE_PREFIX + node.getName()].getLocation() });
        })
        this.window.requestAnimationFrame(this.loop);
    }

    render() {

        return <Blueprint ref={ref => this.Blueprint = ref} window={this.window} style={{ minWidth: this.props.initClientWidth, minHeight: this.props.initClientHeight }}>
            {this.initNodes()}
            <svg
                ref={ref => this.svgGrid = ref}
                width='100%'
                height='100%'
            >
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10"
                        refX="1" refY="5"
                        markerUnits="strokeWidth"
                        markerWidth="4" markerHeight="4"
                        orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.line.stroke} />
                    </marker>
                    <marker id="mid_arrow" markerWidth="2" markerHeight="2" viewBox="-1 -1 2 2" orient="auto">
                        <path fill="blue" d="M-1,-1 L1,0 -1,1 z" />
                    </marker>
                </defs>
                <circle cx={this.originX} cy={this.originY} r={10} fill={colors.line.stroke} stroke={colors.node.background} strokeWidth={3} ref={ref => this.origin = ref} />
                <Line start={[this.originX, this.originY]} end={this.state[this.NODE_POS_PREFIX + 'flyright']} ></Line>
                {this.initLines()}
            </svg>

        </Blueprint>
    }
}

export default AnimBlueprint;