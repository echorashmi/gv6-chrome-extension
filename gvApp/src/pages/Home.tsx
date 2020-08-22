import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/react';
import { IonSegment, IonSegmentButton, } from '@ionic/react';
import React from 'react';
import './Home.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';

class RenderCard extends React.Component<{
    title: string, 
    subtitle: string, 
    link: string, 
    imgsrc: string,
    content: string
  }, {}> {
  render(){
    return (
      <IonCard button={true} target="_blank" href={this.props.link}>
                <img src={this.props.imgsrc} alt="" />
        <IonCardHeader>
          <IonCardSubtitle>
              {this.props.subtitle}
          </IonCardSubtitle>
          <IonCardTitle>
              {this.props.title}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {this.props.content}
        </IonCardContent>
      </IonCard>
    );
  }
}

class RenderPage extends React.Component<{}, any>{
  constructor(props:string){
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
  }
  
  getFeed()
  {
      fetch("http://localhost:8100/assets/gvArticleFeed.json")
      .then(res => res.json())
      .then((json) => {
          this.setState({
              isLoaded: true,
              items: json.PERS,
          })
      });
      //this.state.items has the JSON Feed in it. 
  }

  reorderCards(groupByVariable){
     var newJsonObject = convertJsonObject(this.state.items, groupByVariable);
     console.log(newJsonObject);
     switch(groupByVariable){
      case 'domain':
        console.log("Domain Grouping");
        break;
      case 'category':
        console.log("Category Grouping");
        break;
      case 'score':
        console.log("Score Grouping");
        break;
    }
  }

  render(){
    var feeds = this.getFeed();

    const {isLoaded, items} = this.state;

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonSegment color="secondary" onIonChange={e => this.reorderCards(e.detail.value)}>
              <IonSegmentButton value="domain">
                Group by Domain
              </IonSegmentButton>
              <IonSegmentButton value="category">
                Group by Category
              </IonSegmentButton>
              <IonSegmentButton value="score">
                Group by Score
              </IonSegmentButton>
            </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
        <IonToolbar>
            <IonTitle>Domain 1:</IonTitle>
        </IonToolbar>
          <IonRow>
                  {
                    items.map((item, key) => (
                      <IonCol size="3">
                        <RenderCard 
                            subtitle={item.Domain}
                            title={item.Title}
                            link={item.Link}
                            imgsrc={item.Image}
                            content={item.Description} />  
                      </IonCol>
                    ))
                  }
            </IonRow>
          </IonGrid>

      </IonContent>
    </IonPage>
    )
  }
}

export default RenderPage;

function convertJsonObject(originalJsonObject, groupByVariable){
  var arrKeys:any = new Array();
  var workingJsonObject = new Object(); 
  

  for (var i = 0; i < originalJsonObject.length; i++) {
    switch(groupByVariable)
      {
          case 'domain':
            var label = originalJsonObject[i].Domain;
            break;
          case 'category':
            var label = originalJsonObject[i].Content;
            break;
          case 'score':
            var label = originalJsonObject[i].Score;
            break;
      }
    

    arrKeys = Object.keys(workingJsonObject);
    if(arrKeys.includes(label)){

      //Check if it is already an array, then push this new value to it
      if(Array.isArray(workingJsonObject[label])){
        workingJsonObject[label].push(originalJsonObject[i]);
      }
      else{
        var temp = workingJsonObject[label];
        workingJsonObject[label] = [];
        workingJsonObject[label].push(temp);
        workingJsonObject[label].push(originalJsonObject[i]);
      }
    }
    else{
      workingJsonObject[label] = originalJsonObject[i];
    }
  }
  
  return workingJsonObject;
}