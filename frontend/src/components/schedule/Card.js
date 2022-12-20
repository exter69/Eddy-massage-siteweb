import React from 'react';

const schedules = [
    {
        "time": "15/16",
        "status": "open",
    },
    {
        "time": "16/17",
        "status": "open",
    },
    {
        "time": "17/18",
        "status": "close",
    },{
        "time": "18/19",
        "status": "open",
    }
];




const Card = (props) => {
    return (
        <div className="card w-1/6 bg-base-100 shadow-xl image-full ">
            <figure><img src="https://thumbs.dreamstime.com/z/mod%C3%A8le-ic%C3%B4ne-page-calendrier-jour-de-semaine-lundi-carr%C3%A9-la-illustration-d-objet-vectoriel-simple-liste-des-dates-du-mois-todo-225048983.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.data.dayName}</h2>
                <p>{props.data.dayOfWeek}</p>
                <div className="card-actions justify-end">
                    {schedules.map(e => <button className="btn btn-primary">{e.time}</button>)}
                </div>
            </div>
        </div>
    );
};

export default Card;