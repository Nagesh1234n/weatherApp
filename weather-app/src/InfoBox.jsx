import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// icons
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const INIT_URL ="https://media.istockphoto.com/id/1406689304/photo/aerial-view-of-an-industrial-city-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=GrqBRt9Eg-ykS3MoP0dVIqp_B_Qn92L-mhtS1wI3i18=";

    let COLD_URL = "https://images.unsplash.com/photo-1608259158285-3ea03e3105d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1589654284963-f7cbd7922575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bW1lciUyMHBob3RvJTIwb2YlMjBwdW5lfGVufDB8fDB8fHww";
    let RAIN_URL = "https://images.unsplash.com/photo-1666549235014-6297464b02d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjBhdCUyMHB1bmUlMjBjaXR5fGVufDB8fDB8fHww";
    // let info = {
    //     city: "pune",
    //     feelsLike: 33.41,
    //     humidity: 12,
    //     temp: 36.08,
    //     tempMin: 36.08,
    //     tempMax: 36.08,
    //     weather: "haze",
       
    // };
    return (
        <div className="InfoBox">
            
            {/* <h1>WeatherInfo- {info.weather}</h1> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80?RAIN_URL:info.temp > 20 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      
 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity >80?<ThunderstormIcon/>:info.temp > 15 ? <AcUnitIcon/>:<SunnyIcon/>}
        </Typography>
        <Typography variant="body2"component={"span"} >
         <p>Temprature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>
            The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
         </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}