module CodeCollaboration exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


--import Html.Events exposing (onClick)

import Html.App


--import Array exposing (Array)


view : String -> Html String
view model =
    div [ class "content" ]
        [ h1 [] [ text "Photo Groove" ]
        , button
            []
            --onClick SurpriseMe ]
            [ text "Surprise Me!" ]
        ]



{- update : Msg -> Model -> ( Model, Cmd Msg )
   update msg model =
       case msg of
       -- ...
-}


main : Program Never
main =
    Html.App.program
        { init = ( "", Cmd.none )
        , view = view
        , update =
            (\msg model -> ( model, Cmd.none ))
            --update
        , subscriptions = (\model -> Sub.none)
        }
