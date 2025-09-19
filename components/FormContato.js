import { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { estilos } from '../styles/default';

export default function FormContato({ valores, onSubmit }) {
  const [nome, setNome] = useState(valores?.nome || '');
  const [email, setEmail] = useState(valores?.email || '');
  const [telefone, setTelefone] = useState(valores?.telefone || '');
  const [endereco, setEndereco] = useState(valores?.endereco || '');
  const [foto, setFoto] = useState(valores?.foto || '');

  const escolherImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.7,
    });

    if (!resultado.canceled && resultado.assets?.length > 0) {
      const file = resultado.assets[0];
      if (file.base64) {
        setFoto(`data:image/jpeg;base64,${file.base64}`);
      }
    }
  };

  const enviar = () => {
    onSubmit({ nome, email, telefone, endereco, foto });
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={estilos.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={estilos.input} autoCapitalize="none" />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={estilos.input} />
      <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} style={estilos.input} />

      <Button title="Selecionar imagem" onPress={escolherImagem} />
      {foto ? (
        <Image source={{ uri: foto }} style={{ width: 100, height: 100, marginVertical: 6 }} />
      ) : null}

      <Button title="Salvar" onPress={enviar} />
    </View>
  );
}
