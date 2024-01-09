const User = require('../models').User;

// const userOptions = {
//    include: [
//       {
//          model: Post,
//          as: "posts"
//       }
//    ]
// };

exports.show = ( request, response ) => {
   return User.findByPk( request.params.userId )
      .then( user => {
         if ( !user ) { response.status( 404 ).send( { error: "User not found" } ); }
         else { response.status( 200 ).send( user ); }
      } )
      .catch( error => response.status( 400 ).send( error ) );
}

exports.index = ( request, response ) => {
    return User.findAll()
       .then( user => {
          if ( !user ) { response.status( 404 ).send( { error: "User not found" } ); }
          else { response.status( 200 ).send( user ); }
       } )
       .catch( error => response.status( 400 ).send( error ) );
 }
