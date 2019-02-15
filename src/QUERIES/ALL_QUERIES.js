import gql from 'graphql-tag'

export const IS_SIGNED = gql `
{
  isSignIn
}
`

export const USER_DATA = gql `
{
  me {
    id
    name
    mobile
    email
    cart {
      id
      quantity
      product {
      	id
        description
        name
        price
      }
    } 
  }
}
`
export const UPDATE_QUANTITY = gql `
  mutation updateQuantity($id: ID!, $quantity: Float!) {
    updateQuantity (id: $id, quantity: $quantity) {
    	id
    	quantity
    	product {
    		id
    		name
    		description
    		price
    	}
    }
  }
`
export const DELETE_CART_ITEM = gql `
  mutation deleteToCart($id: ID) {
  deleteToCart(id: $id){
    id
    product {
      id
      name
      description
      price
    }
    quantity
  }
}
`
export const ALL_CATEGORIES = gql `
query Category($category: String!){
  productType(category: $category) {
    id
    category
  }
}
`

export const ALL_ITEMS_BY_CATEGORY = gql `
query ProductByCategory($categoryId: ID!){
  productByCategory(categoryId: $categoryId) {
    id
    name
    price
    category{
      id
      category
    }
  }
}
`
export const PRODUCT_CATEGORIES = gql `

{
  productTypes {
    id
    category
  }
}
`
export const ALL_PRODUCTS_FEATURED = gql `
{
  products{
    id
    category{
      id
      category
    }
    description
    name
    price
  }
}
`
export const SINGLE_PRODUCT = gql `
query Product($name: String!){
  product(name: $name) {
    id
    name
    description
    price
    category {
      id
      category
    }
  }
}
`
export const ADD_TO_CART = gql `
mutation addToCart($productId: ID, $quantity: Float) {
  addToCart(productId: $productId, quantity: $quantity) {
    id
    quantity
    product {
      id
      price
      description
    }
  }
}
`
export const MY_CART = gql `
{
  cart {
    id
    quantity
    product {
      id
      price
      name
      description
    }
  }
}
`
export const ALL_ADDRESS = gql `
{
  addresses {
    id
    zip
    province
    municipal
    baranggay
    fee
    isPickUpAvailable
  }
}
`
export const ALL_CART = gql `
{
  cart {
    id
    product {
      id
      name
      price
      description
    }
    quantity
  }
}
`
export const MY_ADDRESS = gql `
{
  me {
    address {
      id
      province
      municipal
      baranggay
      zip
      fee
      isPickUpAvailable
    }
  }
}
`

export const ADDRESS = gql `
query Address($id: ID!){
  address(id: $id){
    id
    isPickUpAvailable
    baranggay
    municipal
    province
    zip
    fee
  }
}
`
export const ORDER_TYPE = gql `
query OrderType($id: ID!){
  orderType(id: $id) {
    id
    type
  }
}
`
export const PLACE_ORDER = gql `
mutation placeOrder($orderTypeId: ID!, $datePlaced: Date, $datePickUp: Date, $addressId: ID!, $input: [OrderItemInput]) {
  placeOrder(
    orderTypeId: $orderTypeId,
    datePlaced: $datePlaced,
    datePickUp: $datePickUp
    addressId: $addressId,
    input: $input) {
    number
  }
}
`