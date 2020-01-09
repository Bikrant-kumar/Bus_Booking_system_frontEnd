import React from 'react';

 const HomeTemplate=(props)=> {
    return (
        <div>
            <div>
               { props.header }
            </div>
            <div>
                {props.homeview}
            </div>
             <div>
                 { props.footer }
                 <br/>
             </div>
        </div>
    )
}
export default HomeTemplate;