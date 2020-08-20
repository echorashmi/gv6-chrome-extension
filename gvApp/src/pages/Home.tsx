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

class RenderPage extends React.Component{

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
      .then(json => {
          this.setState({
              isLoaded: true,
              items: json,
          })
      });
      //this.state.items has the JSON Feed in it. 
  }

  render(){
    var feeds = this.getFeed();


    return (
<IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
              <IonCol>
                  <RenderCard 
                    subtitle="newswire.ca"
                    title="ImagineAR Announces The Appointment of Gus Frerotte, Former NFL Pro Bowler QB, as Advisor For Augmented Reality Fan Engagement For Professional Sports"
                    link="https://www.newswire.ca/news-releases/imaginear-announces-the-appointment-of-gus-frerotte-former-nfl-pro-bowler-qb-as-advisor-for-augmented-reality-fan-engagement-for-professional-sports-883634008.html"
                    imgsrc= "https://mma.prnewswire.com/media/1230425/ImagineAR_ImagineAR_Announces_The_Appointment_of_Gus_Frerotte__F.jpg?p=facebook"
                    content="/CNW/ - ImagineAR (CSE:IP) (OTCQB: IPNFF) an Augmented Reality Company that enables sports organizations, venues and brands to create their own mobile phone AR..." />
              </IonCol>

              <IonCol>
                  <RenderCard 
                    subtitle="newswire.ca"
                    title="ImagineAR Announces The Appointment of Gus Frerotte, Former NFL Pro Bowler QB, as Advisor For Augmented Reality Fan Engagement For Professional Sports"
                    link="https://www.newswire.ca/news-releases/imaginear-announces-the-appointment-of-gus-frerotte-former-nfl-pro-bowler-qb-as-advisor-for-augmented-reality-fan-engagement-for-professional-sports-883634008.html"
                    imgsrc= "https://mma.prnewswire.com/media/1230425/ImagineAR_ImagineAR_Announces_The_Appointment_of_Gus_Frerotte__F.jpg?p=facebook"
                    content="/CNW/ - ImagineAR (CSE:IP) (OTCQB: IPNFF) an Augmented Reality Company that enables sports organizations, venues and brands to create their own mobile phone AR..." />
              </IonCol>

              <IonCol>
                  <RenderCard 
                    subtitle="newswire.ca"
                    title="ImagineAR Announces The Appointment of Gus Frerotte, Former NFL Pro Bowler QB, as Advisor For Augmented Reality Fan Engagement For Professional Sports"
                    link="https://www.newswire.ca/news-releases/imaginear-announces-the-appointment-of-gus-frerotte-former-nfl-pro-bowler-qb-as-advisor-for-augmented-reality-fan-engagement-for-professional-sports-883634008.html"
                    imgsrc= "https://mma.prnewswire.com/media/1230425/ImagineAR_ImagineAR_Announces_The_Appointment_of_Gus_Frerotte__F.jpg?p=facebook"
                    content="/CNW/ - ImagineAR (CSE:IP) (OTCQB: IPNFF) an Augmented Reality Company that enables sports organizations, venues and brands to create their own mobile phone AR..." />
              </IonCol>

              <IonCol>
                  <RenderCard 
                    subtitle="newswire.ca"
                    title="ImagineAR Announces The Appointment of Gus Frerotte, Former NFL Pro Bowler QB, as Advisor For Augmented Reality Fan Engagement For Professional Sports"
                    link="https://www.newswire.ca/news-releases/imaginear-announces-the-appointment-of-gus-frerotte-former-nfl-pro-bowler-qb-as-advisor-for-augmented-reality-fan-engagement-for-professional-sports-883634008.html"
                    imgsrc= "https://mma.prnewswire.com/media/1230425/ImagineAR_ImagineAR_Announces_The_Appointment_of_Gus_Frerotte__F.jpg?p=facebook"
                    content="/CNW/ - ImagineAR (CSE:IP) (OTCQB: IPNFF) an Augmented Reality Company that enables sports organizations, venues and brands to create their own mobile phone AR..." />
              </IonCol>

            </IonRow>
          </IonGrid>
      </IonContent>

    </IonPage>
    )
  }
}

export default RenderPage;
