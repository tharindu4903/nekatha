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
      <Typography component="div"  />
      <div className={'card1'}>
        <Card >
          <CardContent>
            <Typography class={'cardh'}>
              පුණ්‍ය කාලය
            </Typography>
            <Typography variant="body2" component="p" class={'cbody'}>
            අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 1 පසුවී විනාඩි 59 සිට එදින රාත්‍රී 2 පසුවී විනාඩි 47 දක්වා යෙදී ඇත.
            </Typography>
            <Typography variant="body2" component="p" className= {'count'}>
            නැකතට තව,
            </Typography>
           <Countdown futureDate="2020-04-13 13:59:00"/>
          </CardContent>
        </Card>
        
      </div>
      <div className={'card1'}>
        <Card>
          <CardContent>
          <Typography class={'cardh'}>
            අලුත් අවුරුදු උදාව
            </Typography>
            <Typography variant="body2" component="p" class={'cbody'}>
            අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 08.23 ට සිංහල අලුත් අවුරුද්ද උදා වේ.
            </Typography>
            <Typography variant="body2" component="p" className= {'count'}>
            නැකතට තව,
            </Typography>
           <Countdown futureDate="2020-04-13 20:23:00"/>
          </CardContent>
        </Card>
        
      </div>
      <div className={'card1'}>
        <Card>
          <CardContent>
          <Typography class={'cardh'}>
          ආහාර පිසීම
            </Typography>
            <Typography variant="body2" component="p" class={'cbody'}>
            අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 10.05 ට ශ්වේත වර්ණයෙන් සැරසී නැගෙනහිර දිශාව බලා ලිප් බැඳ ගිනි මොළවා කිරි මිශ්‍ර කිරිබතක් ද තල මිශ්‍ර කැවිලි වර්ගයක් සහ අග්ගලා පිළියෙල කරගැනීම මැනවි.
            </Typography>
            <Typography variant="body2" component="p" className= {'count'}>
            නැකතට තව,
            </Typography>
           <Countdown futureDate="2020-04-13 22:05:00"/>
          </CardContent>
        </Card>
        
      </div>
      <div className={'card1'}>
        <Card>
          <CardContent>
          <Typography class={'cardh'}>
          වැඩ ඇල්ලීම,ගනුදෙනු කිරීම හා ආහාර අනුභවය
            </Typography>
            <Typography variant="body2" component="p" class={'cbody'}>
            අප්‍රේල් මස 13 වන සඳුදා දින අපරභාග 10.43 ට ශ්වේත වර්ණයෙන් සැරසී නැගෙනහිර දිශාව බලා සියලු වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභව කිරීම මැනවි.
            </Typography>
            <Typography variant="body2" component="p" className= {'count'}>
            නැකතට තව,
            </Typography>
           <Countdown futureDate="2020-04-13 22:43:00"/>
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
