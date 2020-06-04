<?php

namespace Classes;

require 'Conexao.php';
use Classes\Conexao;

class Usuario {
    
    private $conexao;
    
    public function __construct() {
        $this->conexao = Conexao::getConexao();
    }
    
    public function listar() {
        
        $sql = "select * from usuario;";       
        $q = $this->conexao->prepare($sql);
        $q->execute();
        return $q;
        
    }
    
    public function inserir($nome, $email, $login, $senha) {
        
        $sql = "insert into usuario (nome, email, login, senha) values (?, ?, ?, ?);";
        $q = $this->conexao->prepare($sql);

        $senha = md5($senha);
        
        $q->bindParam(1, $nome);
        $q->bindParam(2, $email);
        $q->bindParam(3, $login);
        $q->bindParam(4, $senha);
        
        $q->execute();
        
    }
    
}

?>