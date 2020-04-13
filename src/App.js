import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Countdown from './component/countdown';
import AppBar from '@material-ui/core/AppBar';


class App extends Component {

  render() {


    return (

      <body >
        <AppBar position="sticky" className={'appbar'}>
          <h2>අවුරුදු නැකත්</h2>
        </AppBar>
        <Container fixed maxWidth="sm" className={'abc'}>
          <Typography component="div" />
          <div className={'card1'}>
            <Card >
              <CardContent>
                <Typography className={'cardh'} variant="h6" component="h2">
                  පුණ්‍ය කාලය
            </Typography>
                <Typography variant="body2" component="p" className={'cbody'} >
                  අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 1 පසුවී විනාඩි 59 සිට එදින රාත්‍රී 2 පසුවී විනාඩි 47 දක්වා යෙදී ඇත.
            </Typography>
             
                <Countdown futureDate="2020-04-13 13:59:00" />
              </CardContent>
            </Card>

          </div>
          <div className={'card1'}>
            <Card>
              <CardContent>
                <Typography className={'cardh'} variant="h6" component="h2">
                  අලුත් අවුරුදු උදාව
            </Typography>
                <Typography variant="body2" component="p" className={'cbody'}>
                  අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 08.23 ට සිංහල අලුත් අවුරුද්ද උදා වේ.
            </Typography>
            
                <Countdown futureDate="2020-04-13 20:23:00" />
              </CardContent>
            </Card>

          </div>
          <div className={'card1'}>
            <Card>
              <CardContent>
                <Typography className={'cardh'} variant="h6" component="h2">
                  ආහාර පිසීම
            </Typography>
                <Typography variant="body2" component="p" className={'cbody'}>
                  අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 10.05 ට ශ්වේත වර්ණයෙන් සැරසී නැගෙනහිර දිශාව බලා ලිප් බැඳ ගිනි මොළවා කිරි මිශ්‍ර කිරිබතක් ද තල මිශ්‍ර කැවිලි වර්ගයක් සහ අග්ගලා පිළියෙල කරගැනීම මැනවි.
            </Typography>
             
                <Countdown futureDate="2020-04-13 22:05:00" />
              </CardContent>
            </Card>

          </div>
          <div className={'card1'}>
            <Card>
              <CardContent>
                <Typography className={'cardh'} variant="h6" component="h2">
                  වැඩ ඇල්ලීම,ගනුදෙනු කිරීම හා ආහාර අනුභවය
            </Typography>
                <Typography variant="body2" component="p" className={'cbody'}>
                  අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 10.43 ට ශ්වේත වර්ණයෙන් සැරසී නැගෙනහිර දිශාව බලා සියලු වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභව කිරීම මැනවි.
            </Typography>
          
                <Countdown futureDate="2020-04-13 22:43:00" />
              </CardContent>
            </Card>

          </div>
          <div className={'card1'}>
            <Card>
              <CardContent>
                <Typography className={'cardh'} variant="h6" component="h2">
                හිස තෙල් ගෑම
            </Typography>
                <Typography variant="body2" component="p" className={'cbody'}>
                  අප්‍රේල් මස 15 වන බදාදා දින පූර්වභාග 09.17 ට  නැගෙනහිර දිශාව බලා හිසට කොහොඹ පත් ද පයට කොළොන් පත් ද තබා හරිත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී කොහොඹ පත් යුෂ මිශ්‍ර නානු ද ගා ස්නානය මැනවි.
            </Typography>
          
                <Countdown futureDate="2020-04-15 09:17:00" />
              </CardContent>
            </Card>

          </div>
          <div className={'card1'}>
            <Card>
              <CardContent>
                <Typography className={'cardh'} variant="h6" component="h2">
                රැකී රක්ෂා සඳහා පිටත්වීම
            </Typography>
                <Typography variant="body2" component="p" className={'cbody'}>
                  අප්‍රේල් මස 17 වන සිකුරාදා දින පූර්වභාග 07.56 ට ලා නිල් පැහැති වස්ත්‍රාභරණයෙන් සැරසී තල හා හකුරු මිශ්‍ර කිරිබත් අනුභව කර නැගෙනහිර දිශාව බලා පිටත්ව යෑම මැනවි.
            </Typography>
          
                <Countdown futureDate="2020-04-17 07:56:00" />
              </CardContent>
            </Card>

          </div>
          <div>
            <p>©2020 D'Front Creations. All rights reserved</p>
          </div>

          

        </Container>
      </body>

    );
  }
}
export default App;
