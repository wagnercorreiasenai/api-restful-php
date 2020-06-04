<?php

namespace Classes;

class Conexao {

    public static function getConexao() {

        $caminhoDoArquivo = "sqlite/site.db";
        $con = new \PDO("sqlite:" . $caminhoDoArquivo);

        return $con;
    }

}
