import Stripe from 'stripe';

export default defineEventHandler(async () => {
  try{
    let returnObj = await getData();
    return {
      ok: true,
      data: returnObj
    }
  }
  catch(err){
    throw createError({
      statusCode: 500,
      message: "Some error message"
    });
  }
  
});

async function getData(){
  const stripe = new Stripe('');
  const products = await stripe.products.list();

  let returnObj: Array<any> = [];
  
  for(let i = 0; i < products.data.length; i++){
    if(products.data[i]['default_price'] != null){
      let price = await stripe.prices.retrieve(`${products.data[i]['default_price']}`);
      if(price['unit_amount'] != null){
        returnObj.push({
          "name": products.data[i]['name'],
          "value": price['unit_amount']/100
        })
      }
    }
  }

  return returnObj;
}