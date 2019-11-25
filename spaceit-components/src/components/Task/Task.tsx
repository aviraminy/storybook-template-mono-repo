import * as React from 'react';
import  {PureComponent} from 'react';
import './Task.scss';

interface Props {
    /**
     * Task content - the actual task text
     */
    description: string;
    
    /**
     * Is the task urgnet. 
     * Affects the display of the task to make it stand out.
     * @default false
     */
    urgent?: boolean;
}

class Task extends PureComponent<Props> {

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