import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { IonSegment, IonSegmentButton, } from '@ionic/react';
import { call, home, heart, star, globe, basket, bookmark } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { add } from 'ionicons/icons';
import './Home.css';
import { RouteComponentProps } from 'react-router';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { resolve } from 'url';
import ReactDOM from 'react-dom';

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
                <img src={this.props.imgsrc} />
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
    //Reorder Cards on the Page given this setting?
    //Practice Fiddle: https://jsfiddle.net/gfktLp73/10/
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
