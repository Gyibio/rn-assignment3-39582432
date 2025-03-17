import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView} from 'react-native';

const categories =[
  {id: "1", title: "Exercise", subTitle: "12 Tasks", image: require("./assets/woman.png")},
  {id: "2", title: "Study", subTitle: "12 Tasks", image: require("./assets/woman2.png")},
  {id: "3", title: "Workout", subTitle: "12 Tasks", image: require("./assets/exercise1.png")},
  {id: "4", title: "Cook", subTitle: "12 Tasks", image: require("./assets/cook.png")},
  {id: "5", title: "Eat", subTitle: "12 Tasks", image: require("./assets/eating.jpeg")},
  {id: "6", title: "Read", subTitle: "12 Tasks", image: require("./assets/reading.png")},
  {id: "7", title: "Play", subTitle: "12 Tasks", image: require("./assets/Play.png")},
  {id: "8", title: "Relax", subTitle: "12 Tasks", image: require("./assets/music.png")},    
];

const Cards=[
  {id: "1", text: "Mobile App Development"},
  {id: "2", text: "Web Development"},
  {id: "3", text: "Listening to Music"},
  {id: "4", text: "Eating noodles "},
  {id: "5", text: "Reading a Novel"},
  {id: "6", text: "Making Noodles"},
  {id: "7", text: "Playing Games"},
  {id: "8", text: "Complete Assigments"},
  {id: "9", text: "Desktop App Development"},
  {id: "10", text: "Game Development"},
  {id: "11", text: "Taking a Walk"},
  {id: "12", text: "Project Execution"},
  {id: "13", text: "Project Documentation"},
  {id: "14", text: "Database Developmant"},
  {id: "15", text: "Coding"},

]

const CategoryItem =({ title, subTitle, image}) =>(
  <View style={styles.itemContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
    <Image source={image} style={styles.image}/>
  </View>
)

const CardItem =({ text}) =>(
  <View style={styles.card}>
    <Text style={styles.cardText}>{text}</Text>
  </View>
)

export default function App() {
  return (
    
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View>
          <Text style={styles.maintitle}>Hello , Devs</Text>
          <Text style={styles.mainsubTitle}>14 tasks today</Text>
        </View>
        <View style={styles.profileicon}>
          <Image source={require('./assets/profile_icon.png')}/>
        </View>
      </View>

      <View style={styles.searchblock}>
        <View style={styles.searchbar}>
          <View style={styles.searchplace}>
            <View style={styles.searchicon}><Image source={require('./assets/search-icon.png')}/></View>
           
          </View>
        </View>
        <View style={styles.filterbox}>
          <View style={styles.rectangle}>
            <View style={styles.filter}><Image source={require('./assets/bx_slider.png')}/></View>
          </View>
        </View>        
      </View>
      <TextInput 
            style={styles.searchplaceholder}
            placeholder='Search...'
            />                        

      <Text style={styles.categories}>Categories</Text>
        <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => <CategoryItem{...item}/>}
        showsHorizontalScrollIndicator={false}
        />
      <Text style={styles.ongoingTask}>Ongoing Task</Text>

      <FlatList
      data={Cards}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) => <CardItem{...item}/>}
      />  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 52,
  },

  header: {
    paddingLeft: 20,
    paddingRight: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  maintitle: {
    fontSize:32,
    fontWeight: 500,
    width: 170,
    height: 37,
  },

  mainsubtitle: {
    width: 85,
    height: 13,
    fontWeight: 400,
    fontSize: 12,
  },

  profileicon: {
    width: 45,
    height: 46,

  },
  searchblock: {
    width: 353,
    height: 48,
    paddingLeft: 20,
    paddingTop:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchbar: {
    width: 280,
    height: 48,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
  },
  searchplace: {
    height:24,
    width: 82,
    paddingLeft:11,
    paddingTop:11,
    flexDirection: 'row',
  },

  searchicon: {
    width: 24,
    height:24,
    paddingLeft: 1,
    paddingTop:1 ,
  },
  searchplaceholder: {
    height: 15,
    paddingLeft:60,
    paddingBottom:5,
    fontSize: 16,
    fontWeight:500,
  },

  filterbox:{
    paddingLeft: 23,
  },
       
  rectangle: {
    height: 48,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 15,
  },

  filter: {
    padding:7,
  },

  categories: {
    paddingTop:60,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 500,
  },

  activityblock: {
    width: 396,
    height: 192,
    marginTop:12,
    marginLeft:20,
  },


  itemContainer: {
    marginTop:12,
    marginLeft: 20,
    backgroundColor: '#FBF9F7',
    borderRadius: 10,
    width: 186,
    height: 192,
  },

  title: {
    fontSize: 16,
    paddingLeft: 16,
    paddingTop: 14,
    fontWeight: 500,
  },

  subTitle: {
    fontSize: 12,
    fontWeight: 400,
    paddingLeft: 16,
    height:14,
  },

  image: {
    width: 135,
    height: 140,
    marginLeft: 28,
    backgroundColor: '#FBF9F7',
    borderRadius: 14,
  },

  ongoingTask: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 500,
    paddingTop: 27,
    paddingBottom:12,
  },

  card: {
    height: 128,
    width: 354,
    backgroundColor: '#FBF9F7',
    borderRadius: 14,
    marginLeft: 20,
    marginBottom:12,
  },
  cardText:{
    paddingLeft: 16,
    paddingTop: 46,
    fontSize: 16,
    fontWeight: 500,
  }

 
  

});
