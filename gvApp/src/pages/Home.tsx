import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon } from '@ionic/react';
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
      fetch("https://gvn6-13a2f.web.app/assets/gvArticleFeed.json")
      .then(res => res.json())
      .then((json) => {
          this.setState({
              isLoaded: true,
              items: json.PERS,
          })
      });
      //this.state.items has the JSON Feed in it. 
  }

  render(){
    var feeds = this.getFeed();

    const {isLoaded, items} = this.state;

    return (
    <IonPage>
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
