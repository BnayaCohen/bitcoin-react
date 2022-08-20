import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart(props) {
console.log(props);
  const { name, description, values } = props.data

  if (!values) return <div></div>
  return (
    <article className="chart-preview">
      <h2>{name}</h2>
      <Sparklines data={values} width={100} height={50} margin={5}>
        <SparklinesLine color="orange" />
      </Sparklines>
      <p>{description}</p>
    </article>
  )
}
