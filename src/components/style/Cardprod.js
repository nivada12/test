import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ListCard from "../ListCard";

// import Panier from "../Panier";

function Cardprod(props) {
  const { category, description, id, image, price, title } = props.obj;
  const { Addproduct, prod } = props;
  return (
    // <Link
    //   to={{
    //     pathname: "/description/" + props.obj.id,
    //     state: props.obj,
    //   }}
    // >
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="zoom"
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h7">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ${price}
        </Button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => Addproduct(prod)}
        >
          ajouter au panier
        </button>
      </CardActions>
    </Card>
    // </Link>
  );
}

export default Cardprod;
