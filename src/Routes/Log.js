import { Link } from "react-router-dom";

function Log({ log, index }){
    return (
        <tr className="Log">
            <td>
                {!log.mistake ? (
                    <span>💥</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                {log.captainName}
            </td>  
            <td>
                <Link to={`/logs/${index}`}>{log.title}</Link>
            </td>
        </tr>
    );
}

export default Log;