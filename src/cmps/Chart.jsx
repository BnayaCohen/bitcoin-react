import React from 'react'
import { Sparklines, SparklinesLine  } from 'react-sparklines';

export class Chart extends React.Component {

  state = {
  }

  render() {
    const { name, description, values } = this.props.data
    if(!values) return <div></div>
    return (
      <article className="chart-preview">
        <h2>{name}</h2>
        <Sparklines data={values} width={100} height={50} margin={5}>
          <SparklinesLine color="blue" />
        </Sparklines>
        <p>{description}</p>
      </article>
    )
  }
}
