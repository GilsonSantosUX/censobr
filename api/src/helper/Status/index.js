// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

module.exports = {
    status(status){
        switch(status){
            case 200:
                return {message:`Estas requisição foi bem sucedida.`,reqStatus:status}; // {message:` `,reqStatus:status};
            case 201:
                return {message:`A requisição foi bem sucedida e um novo recurso foi criado como resultado.`,reqStatus:status};
            case 202:
                return {message:`A requisição foi recebida mas nenhuma ação foi tomada sobre ela.`,reqStatus:status};
            case 203:
                return {message:`Houve alguma inesperado nos dados da requisição tente refazer.`,reqStatus:status};
            case 204:
                return {message:`Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis.`,reqStatus:status};
            case 400:
                return {message:`Servidor não entendeu a requisição pois está com uma sintaxe inválida.`,reqStatus:status};
            case 401:
                return {message:`O cliente deve se autenticar para obter a resposta solicitada.`,reqStatus:status};
            case 403:
                return {message:`O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta.`,reqStatus:status};
            case 404:
                return {message:`O servidor não pode encontrar o recurso solicitado.`,reqStatus:status};
            case 500:
                return {message:`O servidor encontrou uma situação com a qual não sabe lidar.`,reqStatus:status};
            case 501:
                return {message:`O método da requisição não é suportado pelo servidor e não pode ser manipulado.`,reqStatus:status};
            case 503:
                return {message:`O servidor não está pronto para manipular a requisição.`,reqStatus:status};
            default:
                return {message:`Erro ainda não tratado entrar informa um administrador. `,reqStatus:status};
        }
    }
}