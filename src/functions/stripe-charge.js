const stripe = require('stripe')('sk_test_51LbRzCHIdzWvbWi0Ynqcua5RKKG09zIMilW73YIShxafQ6NID3BriKifNYbruYf0Iat3v65tIlzOb5ta0VRPp7lw00mEYJ8mRY')

exports.handler = async function () {
   const {
      tokenId,
      email,
      name,
      description,
      amount
   } = JSON.parse(event.body)

   const customer = await stripe.customer.create({
      description: email,
      source: tokenId
   })

   await stripe.charge.create({
      customer: customer.id,
      amount,
      name,
      description,
      currency: 'usd',
   })
}