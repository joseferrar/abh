// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import banner from "../images/Banner.png";
// import { Container, Typography } from "@mui/material";
// import { Button, ButtonText } from "../components/Button";
// import { GilroyText, LatoText, RobotoText } from "../components/Typographys";
// import new_factory from "../images/inside-new-factory.png";
// import factory_workers from "../images/factory-workers.png";
// import large_modern from "../images/large-modern-office.png";
// import fabrication from "../images/fabrication.png";
// import anodizing from "../images/anodizing.png";
// import automated from "../images/automated.png";
// import shipping from "../images/shipping.png";

// //create our styles
// const classes = {
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: 20,
//     textAlign: "center",
//     color: "#fff",
//     fontFamily: "Roboto",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     paddingBottom: 100,
//     backgroundImage: `url(${banner})`,
//   },
//   section: {
//     padding: 20,
//     color: "#000",
//   },
// };

// export default function Home() {
//   return (
//     <div style={classes.root}>
//       <Grid container spacing={2} marginTop={-12}>
//         {/*Create items with different breakpoints */}
//         {/*For example,This item will be 12 units wide on extra small screens */}
//         <Grid item xs={12}>
//           <Paper style={classes.paper}>
//             <h1 className="banner-title">
//               CUSTOMER SERVICE, AGILE, PRICE ORIENTED SOLUTIONS
//             </h1>

//             <Grid container justifyContent="center" sx={{ mt: 3 }}>
//               <Typography className="banner-subtitle" variant="inherit">
//                 For the Commercial Hardware Industry -{" "}
//               </Typography>
//               <Typography variant="inherit" className="banner-subtitle2">
//                 Ankit Shahv
//               </Typography>

//               <Typography
//                 variant="inherit"
//                 style={{
//                   textAlign: "center",
//                   fontFamily: "lato",
//                   fontSize: "20px",
//                   lineHeight: "36px",
//                   marginTop: "50px",
//                   width: "1200px",
//                 }}
//               >
//                 For over 30 years ABH Manufacturing is an industry leader in
//                 manufactured hardware. Through implementation of Robotics,
//                 Automation, and Lean Manufacturing, we engineer, and manufacture
//                 products in the the United States
//               </Typography>
//             </Grid>

//             <Grid container spacing={3} marginTop={6} justifyContent="center">
//               <Grid item xs={5} sm={2.5} md={1}>
//                 <Button>
//                   <ButtonText>Search</ButtonText>
//                 </Button>
//               </Grid>
//               <Grid item xs={5} sm={4} md={1}>
//                 <Button>
//                   <ButtonText>Tracking</ButtonText>
//                 </Button>
//               </Grid>
//               <Grid item xs={5} sm={4} md={1}>
//                 <Typography
//                   variant="inherit"
//                   style={{
//                     textAlign: "center",
//                     fontFamily: "lato",
//                     fontSize: "20px",
//                     lineHeight: "40px",
//                   }}
//                 >
//                   Price list #13
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>
//         {/*This item will be 12 units on extra small screens */}
//         {/*But will be 6 units on small screens */}

//         <Container maxWidth="xl">
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <Paper style={classes.section} elevation={0}>
//                 <GilroyText>
//                   We Are Trusted Experts in the Door Hardware Manufacturing
//                   Biz!!
//                 </GilroyText>
//                 <RobotoText>
//                   For over 30 years, ABH Manufacturing has been and Industry
//                   Leader in Aluminum Geared Continuous Hinges.
//                 </RobotoText>
//                 <LatoText>
//                   ABH Manufacturing, Inc, controls every aspect of maufacturing
//                   from extrusion to shipping. Through a combination of robotic
//                   and human collaboration any process that can be automated to
//                   increase efficiencies have been implemeted. Team members
//                   monitor and oversee all aspects of producton to make sure we
//                   capture all efficiencies allowing us to pass on and create the
//                   ultimate value for our customers.
//                 </LatoText>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//               <Paper style={classes.section} elevation={0}>
//                 <img
//                   src={new_factory}
//                   alt={"new_factory"}
//                   className="image-media"
//                   style={{ borderRadius: "4px", width: "100%", height: "100%" }}
//                 />
//                 <img
//                   src={factory_workers}
//                   alt={"factory_workers"}
//                   className="image-media2"
//                   style={{ borderRadius: "4px", width: "100%", height: "100%" }}
//                 />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Paper style={classes.section} elevation={0}>
//                 <img
//                   src={large_modern}
//                   alt={"large_modern"}
//                   style={{ borderRadius: "4px", width: "100%", height: "120%" }}
//                 />
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <Paper style={classes.section} elevation={0}>
//                 <img
//                   src={fabrication}
//                   alt={"fabrication"}
//                   style={{ borderRadius: "4px", width: "100%", height: "100%" }}
//                 />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Paper style={classes.section} elevation={0}>
//                 <GilroyText>Extrusion</GilroyText>
//                 <RobotoText style={{ marginTop: -18 }}>
//                   Something that has been shaped by being forced through a die.
//                 </RobotoText>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <Paper style={classes.section} elevation={0}>
//                 <GilroyText>Fabrication</GilroyText>
//                 <RobotoText style={{ marginTop: -18 }}>
//                   The action or process of manufacturing or inventing something
//                 </RobotoText>
//                 <LatoText>
//                   Roboticts find automation allows us to cut and drill a true
//                   templated hinge part in 15 seconds
//                 </LatoText>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={5}>
//               <Paper style={classes.section} elevation={0}>
//                 <img
//                   src={anodizing}
//                   alt={"anodizing"}
//                   style={{ borderRadius: "4px", width: "100%", height: "100%" }}
//                 />
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <Paper style={classes.section} elevation={0}>
//                 <img
//                   src={automated}
//                   alt={"automated"}
//                   style={{ borderRadius: "4px", width: "100%", height: "100%" }}
//                 />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={5}>
//               <Paper style={classes.section} elevation={0}>
//                 <GilroyText>Fully Automated Anodizing</GilroyText>
//                 <RobotoText style={{ marginTop: -18 }}>
//                   For over 20 years, abh manufacturing has been an industry
//                   leader in aluminum geared continuous hinges.
//                 </RobotoText>
//                 <LatoText>
//                   Our fully automated anodizing system can process 400,000 parts
//                   annually, Anodizing is anelectrochemical process that converts
//                   the metal surface into a decorative, durable, corrosion
//                   resistent, anodic oxide finish. Our system allows us to
//                   produce fourteen diffrent finishes. We stock clear, Dark
//                   bronze and Black.
//                 </LatoText>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <Paper style={classes.section} elevation={0}>
//                 <GilroyText>Shipping</GilroyText>
//                 <RobotoText style={{ marginTop: -18 }}>
//                   Large or small here at abh we take pride in making sure your
//                   products are well packaged and shipped on time
//                 </RobotoText>
//                 <LatoText>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitatio.
//                 </LatoText>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={5}>
//               <Paper style={classes.section} elevation={0}>
//                 <img
//                   src={shipping}
//                   alt={"shipping"}
//                   style={{ borderRadius: "4px", width: "100%", height: "100%" }}
//                 />
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Grid>
//     </div>
//   );
// }

import React from "react";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home Page</h1>
    </div>
  );
}

export default Home;
