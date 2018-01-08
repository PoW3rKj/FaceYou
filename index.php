<?php
/**
 * Created by PhpStorm.
 * User: pow
 * Date: 07/01/2018
 * Time: 23:51
 */

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Material Design for Bootstrap fonts and icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">

    <!-- Material Design for Bootstrap CSS -->
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/css/bootstrap-material-design.min.css" integrity="sha384-R80DC0KVBO4GSTw+wZ5x2zn2pu4POSErBkf8/fSFhPXHxvHJydT0CSgAP2Yo2r4I" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">FaceYou</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
        </ul>
    </div>
</nav>
<!-- URL -->
<div class="container">
    <div class="card" style="margin-top: 40px">
        <div class="card-body">
            <p style="font-weight: 300; text-align: center; font-size: 1.5rem;">Inserisci il link diretto dell'immagine da analizzare</p>

            <label for="inputPassword5">Link</label>
            <input type="link" id="inputImageLink" class="form-control" data-toggle="modal" data-target="#myModal" aria-describedby="imageHelpBlock" style="background-image: linear-gradient(0deg,#2196f3 2px,rgba(0,150,136,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);">
            <small id="imageHelpBlock" class="form-text text-muted">
                Il testo inserito deve essere un link diretto all'immagine valido, quindi deve terminare con il formato dell'immagine (.JPG, PNG, .ICO ecc ecc), supporta la certificazione SSL.
            </small>

            <div style="text-align: center; margin-top: 20px;"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="color: #2196f3;">ANALIZZA</button></div>

            <!-- Button trigger modal -->


            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Analisi in corso...</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>






<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
<script src="https://unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/js/bootstrap-material-design.js" integrity="sha384-3xciOSDAlaXneEmyOo0ME/2grfpqzhhTcM4cE32Ce9+8DW/04AGoTACzQpphYGYe" crossorigin="anonymous"></script>
<script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>
<script type="text/javascript">
    $('#myModal').modal('toggle')
</script>
</body>
</html>