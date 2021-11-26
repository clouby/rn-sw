import React from 'react'
import { View, Text, StyleSheet, SectionList, SafeAreaView } from 'react-native'

export default function Description(props: any) {
  const { character, header } = props

  const sections: any[] = buildSections(character, [
    'affiliations',
    'masters',
    'apprentices',
    'equipment',
  ])

  return (
    <View style={styles.content}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
        ListHeaderComponent={header}
        SectionSeparatorComponent={Text}
        ItemSeparatorComponent={Text}
      />
    </View>
  )
}

function buildSections(object: any, fields: string[]): any[] {
  const result: Array<any> = []

  for (const field of fields) {
    if (object[field] && Array.isArray(object[field]) && object[field].length) {
      result.push({
        title: field,
        data: object[field],
      })
    }
  }

  return result
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  item: {
    color: '#333333',
    paddingLeft: 150,
  },
})
