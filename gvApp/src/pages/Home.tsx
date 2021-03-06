import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/react';
import { IonSegment, IonSegmentButton, } from '@ionic/react';
import React from 'react';
import './Home.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { convertJsonObject } from '../hooks/algorithms'; 

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
        isGrouped: false,
        groupType: false
      }
      if(!this.state.groupByVariable){
        var feeds = this.getFeed(); //Where else can I call this function?
        var config = this.getConfig();
        console.log(config); 
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
              isGrouped: false
          })
      });
      //this.state.items has the JSON Feed in it. 
  }

  getConfig()
  {
    fetch("http://127.0.0.1:3030/config")
      .then(res => res.json())
      .then((json) => {
          this.setState({
              isGrouped: true,
              groupType: json._groupByType
          });
      });
  }

  reorderCards(groupByVariable){
     var newJsonObject = convertJsonObject(this.state.items, groupByVariable);
     this.setState({
       isLoaded: true,
       items: newJsonObject,
       isGrouped: groupByVariable
     });
     console.log(this.state.items);
     //this.forceUpdate();
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
          <IonRow>
                  {
                    items.map((item, key) => (
                      <IonCol size="3">
                        <RenderCard 
                            subtitle={item.Domain}
                            title={item.Content}
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