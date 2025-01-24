import PaddingX from '@/Layouts/PaddingX';
import StatsCard from './StatsCard';
import { stats } from './stats';

const Stats = () => {
    return (
        <PaddingX>
            <div className="grid grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <StatsCard
                        key={stat.id}
                        value={stat.value}
                        metric={stat.metric}
                    />
                ))}
            </div>
        </PaddingX>
    );
};

export default Stats;
