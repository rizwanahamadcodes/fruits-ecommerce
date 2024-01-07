import clsx from "clsx";
import { useEffect, useState } from "react";

type CountDownTimerProps = {
    countDownTime: Date;
    direction?: "horizontal" | "vertical";
};

const CountDownTimer = (props: CountDownTimerProps) => {
    const { countDownTime, direction = "vertical" } = props;
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => {
            const now = new Date();

            const dateDiff = countDownTime.getTime() - now.getTime();

            const millisecondsInOneSecond = 1000;
            const millisecondsInOneMinute = millisecondsInOneSecond * 60;
            const millisecondsInOneHour = millisecondsInOneMinute * 60;
            const millisecondsInOneDay = millisecondsInOneHour * 24;

            const days = Math.floor(dateDiff / millisecondsInOneDay);
            const hours = Math.floor(
                (dateDiff % millisecondsInOneDay) / millisecondsInOneHour
            );
            const minutes = Math.floor(
                (dateDiff % millisecondsInOneHour) / millisecondsInOneMinute
            );
            const seconds = Math.floor(
                (dateDiff % millisecondsInOneMinute) / millisecondsInOneSecond
            );

            setTime({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);
    }, [props]);
    return (
        <div
            className={clsx(
                "flex justify-start items-start gap-1",
                direction === "horizontal" ? "flex-row" : "flex-col"
            )}>
            <TimeBox count={time.days} title="Days" />
            <TimeBox count={time.hours} title="Hours" />
            <TimeBox count={time.minutes} title="Mins" />
            <TimeBox count={time.seconds} title="Secs" />
        </div>
    );
};

type TimeBoxProps = {
    count: number;
    title?: string;
};

const TimeBox = (props: TimeBoxProps) => {
    const { count, title } = props;

    const processCount = (count: number) => {
        return count.toString().padStart(2, "0");
    };

    return (
        <div className="bg-white rounded-0.5 p-0.5 min-w-[3.25rem] min-h-[3rem] shadow-[3px_3px_0px_1px_red] shadow-primary-400 border-[1px] border-gray-100">
            <p className="text-900 font-semibold">{processCount(count)}</p>
            <div className="h-[2px] w-full bg-gray-100"></div>
            <p className="text-0.75 text-gray-500">{title}</p>
        </div>
    );
};

export default CountDownTimer;
