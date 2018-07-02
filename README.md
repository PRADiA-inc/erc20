# ERC-20に準拠したトークン作成
truffleでプロジェクト作成

    contruct PRADiAcoin {
        function totalSupply() constant returns (uint totalSupply);
        function balanceOf(address _owner) constant returns (uint balance);
        function transfer(address _to, uint _value) returns (bool success);
        event Transfer(address indexed _from, address indexed _to, uint _value);
    }

NOTE:
`constant`はSolidity 0.4.18では、`pure`もしくは`view｀に変更されているので、注意

