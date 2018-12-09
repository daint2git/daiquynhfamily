import Lazyload from 'react-lazyload'
import hash from 'utils/fnv-hash'

import Placeholder from 'components/atoms/Placeholder'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Column = ({ src, ...rest }) => (
  <Lazyload throttle={400} height={400} placeholder={<Placeholder />}>
    <div className={cssModules`column`}>
      <img src={src} alt={src} {...rest} />
    </div>
  </Lazyload>
)

const Row = ({ column1Props, column2Props, column3Props, column4Props }) => (
  <div className={cssModules`row`}>
    {column1Props && <Column {...column1Props} />}
    {column2Props && <Column {...column2Props} />}
    {column3Props && <Column {...column3Props} />}
    {column4Props && <Column {...column4Props} />}
  </div>
)

const ResponsiveImages = ({ list }) => {
  const rowList = []
  for (let i = 0; i < list.length; i += 4) {
    rowList.push(
      <Row
        key={hash(JSON.stringify(list[i]))}
        column1Props={list[i]}
        column2Props={list[i + 1]}
        column3Props={list[i + 2]}
        column4Props={list[i + 3]}
      />,
    )
  }

  return <div className={cssModules`root`}>{rowList}</div>
}

export default ResponsiveImages
