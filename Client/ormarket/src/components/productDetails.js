import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Image} from 'semantic-ui-react'
import CardContent from '@material-ui/core/CardContent';
const ProductDetails = ({name,description, quantity, price,urlimage}) => {
    return (
        <CardContent>
            <Image size="mini" src={urlimage} width={200} height={200}/>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {'price: $'+price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {'quantity: '+quantity}
            </Typography>
        </CardContent>
    )
};

export default ProductDetails