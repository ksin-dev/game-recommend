import gql from "graphql-tag"

export const GET_GAME_CONTENTS = gql`
  query {
  gameContents {
    id
		genres {
      id
      name
    }
    ProductionNation {
      id
      name
    }
    productionYear
    title
    content
    mainImage
    subImage
  }
  
}
`
export const FILE_UPLOAD_MUTATION = gql`
  mutation($file:Upload!) {
    uploadFile(file:$file) {
      id
      filename
      mimetype
      encoding
      originalFilename
      path
    }
  }
 `

export const GET_GENRES_AND_NATIONS = gql`
  query getGenresAndNations {
    genres {
      id
      name
    }
    nations {
      id
      name
    }
  }
`
export const GET_GAMECONTENT = gql`
  query gameContent($id:ID!){
    gameContent(where:{id:$id}) {
        id
    genres {
      id
      name
    }
    title
    content
    productionYear
    ProductionNation {
      id
      name
    }
    mainImage
    subImage
    }
  }
`
export const CREATE_GAME_CONTENT = gql`
  mutation createGameContent($data:GameContentCreateInput!){
    createGameContent(data: $data) {
      id
      genres {
        id
        name
      }
      title
      content
      productionYear
      ProductionNation {
        id
        name
      }
      mainImage
      subImage
    }
  }
`

export const UPDATE_GAME_CONTENT = gql`
  mutation updateGameContent($id:ID!,$data:GameContentUpdateInput!) {
    updateGameContent(where:{id:$id},data: $data) {
      id
      genres {
        id
        name
      }
      title
      content
      productionYear
      ProductionNation {
        id
        name
      }
      mainImage
      subImage
    }
  }
`

