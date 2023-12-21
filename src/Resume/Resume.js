import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
} from '@react-pdf/renderer';
import styles from './styles'


const Resume = props => (
  <Document>
    <Page size="letter" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{ props.name }</Text>
        <View style={styles.contact}>
          <Text style={styles.email}>{ props.email }</Text>
          <Text style={styles.phone}>{ props.phone }</Text>
          <Text style={styles.site}>{ props.website}</Text>
        </View>
      </View>

      <Text style={styles.tagline}>{ props.tagline }</Text>

      { props.sections.map(section => (
        <View key={section.name} style={styles.section}>
          <View style={styles.sectionDivider}></View>
          <View style={styles.sectionNamePositioner}>
            <Text style={styles.sectionName}>{ section.name }</Text>
          </View>

          { section.items.map((item, i) => (
            <View key={i} style={styles.item}>

              { item.summary1 ? (
                <View style={styles.itemFirstLine}>
                  <View style={styles.itemSummary}>
                    <Text style={styles.summary1}>{ item.summary1 }</Text>

                    { item.summary2 ? (
                      <React.Fragment>
                        <Text style={styles.divider}>–</Text>
                        <Text style={styles.summary2}>{ item.summary2 }</Text>
                      </React.Fragment>
                    ) : null }

                    { item.summary3 ? (
                      <React.Fragment>
                        <Text style={styles.divider}>–</Text>
                        <Text style={styles.summary3}>{ item.summary3 }</Text>
                      </React.Fragment>
                    ) : null }
                  </View>

                  <Text style={styles.dates}>{ item.dates }</Text>
                </View>
              ) : null }

              { item.bullets ? item.bullets.map((bullet, j) => (
                  <View key={j} style={styles.itemBullet}>
                    <Text style={styles.bulletText}> » { bullet }</Text>
                  </View>
              )) : null }

              { item.text ? item.text.map((line, j) => (
                  <Text key={j} style={styles.itemText}>{ line }</Text>
              )) : null }
            </View>
          )) }
        </View>
      )) }
    </Page>
  </Document>
)


export default Resume
