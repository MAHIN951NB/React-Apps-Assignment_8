import Display from './Display/Display';
import { useLoaderData } from 'react-router';

const Dataloader = () => {
    const data = useLoaderData();

    return (
        <Display data={data} />
    );
};

export default Dataloader;
