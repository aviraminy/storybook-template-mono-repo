import React from 'react';
import './Task.scss';

interface Props {

}

class Task extends React.PureComponent<Props> {
/*     static propTypes = {
        task: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
          }),
          onArchiveTask: PropTypes.func,
          onPinTask: PropTypes.func,
    };
 */

    static defaultProps: Partial<Props> = {
        
    };

    render() : JSX.Element{

        return (
        
            <div>Hello World</div>
            );
    }
}

export default Task;