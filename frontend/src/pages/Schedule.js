import React, {useEffect, useRef, useState} from 'react';
import Card from "../components/schedule/Card";


const getDayRemainingInMonth = () => {
    let now = new Date()
// Tot number of days in current month
    const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
// Today's day
    const today = now.getDate();
// Remaining days of the month
    return totalDays - today;
}

function getDaysInCurrentMonth() {
    const date = new Date();

    return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
}

const getDayName = (day, month) => {
    const tdyDate = new Date();
    const date = new Date(
        tdyDate.getFullYear(),
        month,
        day
    );
    return date.toLocaleDateString("fr-FR", {weekday: 'long'});
}

const getDayForCards = () => {
    const week = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
    return week.indexOf(getDayName());
}

const getCards = () => {

    let schedule = [];
    let dayOfWeek = getDaysInCurrentMonth() - getDayRemainingInMonth();
    let currentMonth = new Date().getMonth();
    const dayToRender = getDayRemainingInMonth() < getDaysInCurrentMonth() ? getDayRemainingInMonth + (getDaysInCurrentMonth() - getDayRemainingInMonth()) : getDayRemainingInMonth();

    for (let i = getDaysInCurrentMonth(); i > 0; i-- && dayOfWeek >= getDaysInCurrentMonth()? dayOfWeek = 1 && currentMonth++ : dayOfWeek++ ) {
        //todo: trouver un moyen d'afficher les jours de la semaine dans le bonne ordre


        const data = {
            "month": currentMonth,
            "dayOfWeek": dayOfWeek,
            "dayName": getDayName(dayOfWeek)
        }

        schedule.push(
            <Card key={i} data={
                data
            }/>);
    }
    return schedule;
}


const Schedule = () => {

    return (
        <div className={"flex flex-row flex-wrap m-5"}>
            {
                getCards()
             }
        </div>
    );
};

export default Schedule;