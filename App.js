import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


const Encuesta = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cedula, setCedula] = useState('');

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para procesar los datos del formulario, como enviarlos a un servidor o almacenarlos localmente
    console.log('Nombre :', nombre);
    console.log('Edad:', edad);
    console.log('Cédula:', cedula);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Encuesta</Text>

      <TextInput
        style={{ height: 40, borderColor: '#ccc', borderWidth: 1, margin: 10 }}
        placeholder="Robin  madein ecuador"
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />

      <TextInput
        style={{ height: 40, borderColor: '#ccc', borderWidth: 1, margin: 10 }}
        placeholder="Edad"
        keyboardType="number"
        onChangeText={(text) => setEdad(text)}
        value={edad}
      />

      <TextInput
        style={{ height: 40, borderColor: '#ccc', borderWidth: 1, margin: 10 }}
        placeholder="Cédula"
        keyboardType="number"
        onChangeText={(text) => setCedula(text)}
        value={cedula}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default Encuesta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
