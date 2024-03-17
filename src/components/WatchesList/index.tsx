import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Watch from '../Watch';

interface Props {
    watches: {
        id: string;
        timeZone: number;
        watchName: string
    }[];
    onRemoveWatch: (id: string) => void;
}

const WatchesList = ({ watches, onRemoveWatch }: Props) => {
    return (
        <Row>
            {watches.map((item) => (
                <Col
                    key={item.id}
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center mb-3"
                >
                    <Watch
                        id={item.id}
                        timeZone={item.timeZone}
                        watchName={item.watchName}
                        onRemove={onRemoveWatch}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default WatchesList;
