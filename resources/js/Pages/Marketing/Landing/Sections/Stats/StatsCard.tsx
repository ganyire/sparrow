type StatsCardProps = {
    metric: string;
    value: number | string;
};
const StatsCard = (props: StatsCardProps) => {
    const { metric, value } = props;

    return (
        <div className="space-y-4 text-center">
            <h3 className="flex flex-col items-center gap-y-6 text-5xl font-bold">
                <span>{value}</span>
                <span className="h-[3px] w-[30px] bg-blue-500" />
            </h3>
            <p className="text-gray-500">{metric}</p>
        </div>
    );
};

export default StatsCard;
