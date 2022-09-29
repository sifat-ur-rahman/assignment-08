import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div>
            <h3>Answer the question</h3>
            <div className='ans'>

                <h4>How dose react work</h4>
                <li>React is a JavaScript library (not framework). Which works with other JavaScript library.</li>
                <li>In react app there are other working tools, which are working together. like Bable , Node, npm, Webpack , JSX.</li>


            </div>
            <div className='ans' >
                <h3 >Difference Between PROPS, STATE</h3>
                <table>
                    <tr>
                        <th>PROPS</th>
                        <th> STATE</th>

                    </tr>
                    <tr>
                        <td>The Data is passed from one component to another.</td>
                        <td>The Data is passed within the component only.</td>
                    </tr>
                    <tr>
                        <td>It is Immutable (cannot be modified).</td>
                        <td>It is Mutable ( can be modified).</td>
                    </tr>
                    <tr>
                        <td>Props are read-only.</td>
                        <td>State is both read and write.</td>
                    </tr>
                </table>
            </div>
            <div className='ans' >
                <h4>where to use useEffect in react</h4>
                <p>If the function has to do any work other than giving the output, those works are side-effects of the function. And the useEffect() hook is used to implement these side-effects, that is, all the work of the side effect has to be done within the useEffect() function.

                    Some examples of side-effects are data fetching, manual dom manipulation, use of timer functions, subscription setup, etc.</p>
            </div>
        </div>
    );
};

export default Answer;