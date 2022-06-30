import CountUp from 'react-countup';

type Props = {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  seperator?: string;
  className?: string;
};

const Price = (props: Props) => {
  return (
    <CountUp
      className={props.className}
      start={props.start ?? 0}
      end={props.end}
      useEasing
      duration={props.duration ?? 0.5}
      separator={props.seperator}
      prefix={props.prefix}
      suffix={props.suffix}
    />
  );
};

export default Price;
