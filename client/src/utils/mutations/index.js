import {gql} from '@apollo/client'


//mutation for login. Based off Profile.js
export const LOG = gql `
    
    mutation login($email: String!, $password:String!){
        login(email: $email, password: $password){
            token
            user{
                _id
            }
        }
    }
`

export const ADD_PROFILE = gql`
  mutation addProfile(
    $name: String!
    $email: String!
    $password: String!
  ) {
    addProfile(
      name: $name
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`