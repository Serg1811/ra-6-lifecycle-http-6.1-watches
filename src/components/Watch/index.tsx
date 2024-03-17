import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import './index.css';

interface Props {
    id: string;
    timeZone: number;
    watchName: string;
    onRemove: (id: string) => void;
}

const Watch = ({ id, timeZone, watchName, onRemove }: Props) => {
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
    });

    const clock = () => {
        const date = new Date();
        const hoursOffset = timeZone + date.getTimezoneOffset() / 60;
        console
        const hours = ((date.getHours() + hoursOffset + 11) % 12) + 1;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30 + minutes * 0.5;
        const minute = minutes * 6 + seconds * 0.1;
        const second = seconds * 6;

        setTime({
            hour,
            minute,
            second,
        });
    };

    useEffect(() => {
        clock();

        const intervalId = setInterval(clock, 1000);

        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Row>
                <Col md={12} className="d-flex justify-content-center mb-3">
                    <h2>{watchName}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-center mb-3">
                    <div className="clock simple show">
                        <div className="hours-container">
                            <div
                                className="hours"
                                style={{ transform: `rotate(${time.hour}deg)` }}
                            ></div>
                        </div>
                        <div className="minutes-container">
                            <div
                                className="minutes"
                                style={{
                                    transform: `rotate(${time.minute}deg)`,
                                }}
                            ></div>
                        </div>
                        <div className="seconds-container">
                            <div
                                className="seconds"
                                style={{
                                    transform: `rotate(${time.second}deg)`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <CloseButton onClick={() => onRemove(id)} />
                </Col>
            </Row>
        </Container>
    );
}

export default Watch;
