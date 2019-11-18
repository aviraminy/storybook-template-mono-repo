import React from 'react';
import './Task.scss';

interface Props {
    description: string;
    urgent?: boolean;
}

class Task extends React.PureComponent<Props> {

    static defaultProps: Partial<Props> = {
        urgent: false
    };

    render() : JSX.Element{
        const {urgent, description} = this.props;
        return (
            <div className={urgent ? 'task-important': ''}>{description}</div>
            );
    }
}

export default Task;