import React from 'react';
import { Blueprint, Node } from './ASMComponents';
import propTypes from 'prop-types';


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

const Line = (props) => {
    const { start, end } = props
    return <line x1={start ? start[0] : '50%'} y1={start ? start[1] : "50%"}
        x2={end ? end[0] : 0} y2={end ? end[1] : 0}
        stroke="#eeeeee" strokeWidth={3}
        {...props}
    />
}

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.NODE_PREFIX = 'NODE_';
        this.NODE_POS_PREFIX = 'NODE_POS_';
    }

    state = {
    }

    static propTypes = {
        animNodes: propTypes.array,
    }

    componentDidMount() {
        this.loop();
    }

    setActiveNode = (node) => {
        this.activeNode = node.name
        this.Blueprint.setTooltip({ 'ID': node.getName(), ...node.getData() })

    }
    
    initNodes = () => {
        const { animNodes } = this.props;
        
        return animNodes.map(node =>
            <Node key={node.getName()}
                x={Math.random() * 100} y={Math.random() * 50}
                ref={ref => this[this.NODE_PREFIX + node.getName()] = ref}
                title={node.getName()}
                onFocus={() => this.Blueprint.setTooltip({ 'ID': node.getName(), ...node.getData() })}
                style={{ borderColor: this.activeNode === node.getName() ? '#84ffff' : '#333333'}}
            />)
    }

    initLines = () => {
        const { transitions } = this.props
        return transitions.map(transition => {
            var startPoint = this.state[this.NODE_POS_PREFIX + transition.fromAnim]
            var endPoint = this.state[this.NODE_POS_PREFIX + transition.toAnim]
            if (startPoint && endPoint) {
                var vecDir = Vec.normalize([startPoint[0] - endPoint[0], startPoint[1] - endPoint[1]])
                endPoint = Vec.add(endPoint, Vec.multiply(vecDir, 70 - 30 * Math.abs(vecDir[1])))
                var offset = transition.paired ? [-vecDir[1] * 10, vecDir[0] * 10] : [0, 0]

                return <Line
                    key={transition.fromAnim + transition.toAnim}
                    start={Vec.add(this.state[this.NODE_POS_PREFIX + transition.fromAnim], offset)}
                    end={Vec.add(endPoint, offset)}
                    markerEnd='url(#triangle)'
                    onClick={() => this.Blueprint.setTooltip(
                        {
                            ID: transition.fromAnim + ' to ' + transition.toAnim,
                            Condition: transition.condition.toString().replace('() =>', ' ')
                        })
                    } />
            }

        }
        )
    }

    loop = () => {
        this.props.animNodes.map(node => this.setState({ [this.NODE_POS_PREFIX + node.getName()]: this[this.NODE_PREFIX + node.getName()].getLocation() }))
        requestAnimationFrame(this.loop);
    }

    render() {
        return <Blueprint ref={ref => this.Blueprint = ref}>
            {this.initNodes()}
            <svg
                ref={ref => this.svg = ref}
                width='100%'
                height='100%'
            >
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10"
                        refX="1" refY="5"
                        markerUnits="strokeWidth"
                        markerWidth="4" markerHeight="4"
                        orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#fff" />
                    </marker>
                    <marker id="mid_arrow" markerWidth="2" markerHeight="2" viewBox="-1 -1 2 2" orient="auto">
                        <path fill="blue" d="M-1,-1 L1,0 -1,1 z" />
                    </marker>
                </defs>
                <circle cx='50%' cy='50%' r={10} fill="#333333" stroke="#eeeeee" strokeWidth={2} />
                <Line start={['50%', '50%']} end={this.state[this.NODE_POS_PREFIX + 'flyright']} ></Line>
                {this.initLines()}
            </svg>
        </Blueprint>
    }
}

export default Index;