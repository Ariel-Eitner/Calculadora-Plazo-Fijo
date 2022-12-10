import React, {useState} from 'react';
import {
  StyleSheet,
  Text,  
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';





const App = () => {
  // inputs
  const [intereses, setIntereses] = useState('');
  const [interesAnual, setInteresAnual] = useState('');
  const [dias, setDias] = useState('');

  // outputs
  const [dineroNecesario, setDineroNecesario] = useState(0);
  const [capitalFinal, setCapitalFinal] = useState(0);

  

  // Formatear dinero 
  const formattedDineroNecesario = dineroNecesario.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedCapitalFinal = capitalFinal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Función para calcular el dinero necesario y el capital final
  const calcular = () => {
    if(intereses <= 0 || interesAnual <= 0 || dias <= 0 || intereses === "" || interesAnual === "" || dias === "") {
      Alert.alert("Error", "Por favor, ingrese valores mayores que 0 y no vacíos");
    } else {
      // Calcular el dinero necesario
      const dinero = intereses / interesAnual / dias * 36500;
      setDineroNecesario(dinero); 
      // Calcular el capital final
      const final = dinero + intereses;
      setCapitalFinal(final);
 }
 }
  //Eliminar inputs
  const reset = () => {
    setIntereses('');
    setInteresAnual('');
    setDias('');
    setDineroNecesario(0);
    setCapitalFinal(0);
    }

  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Calculadora Plazo Fijo inverso</Text>
      <Text style={styles.subtitle}>Calcula el dinero que necesitas para el interes que quieres</Text>
    </View>

    <View>
      <Text style={styles.subtitle}>Intereses que deseas generar:</Text>
      <TextInput
        style={styles.input}
        value={intereses}
        onChangeText={text => setIntereses(Number(text))}
        keyboardType='numeric'
      />

      <Text style={styles.subtitle}>Interés anual:</Text>
      <TextInput
        style={styles.input}
        value={interesAnual}
        onChangeText={text => setInteresAnual(Number(text))}
        keyboardType='numeric'
      />

      <Text style={styles.subtitle}>Días:</Text>
      <TextInput
        style={styles.input}
        value={dias}
        onChangeText={text => setDias(Number(text))}
        keyboardType='numeric'
      />

      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.button}
        onPress={calcular}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.resetButton}
        onPress={reset}
      >
      
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
      </View>
    </View>

    <View style={styles.resultados}>
      <Text style={styles.resultadosText}>Dinero necesario:</Text>
      <Text style={styles.resultadosText}>${formattedDineroNecesario}</Text>

      <Text style={styles.resultadosText}>Capital final:</Text>
      <Text style={styles.resultadosText}>${formattedCapitalFinal}</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({  
  container: {
    backgroundColor: '#00BFA5',
    flex: 1
  },  
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: 10,
    textAlign: 'center',
    marginVertical: 5
  },
  button: {
    backgroundColor: '#006400',
    borderRadius: 5,
    color: 'black',
    padding: 10,
    textAlign: 'center',
    width: 100,
    marginVertical: 10,    
    borderWidth: 1,
    borderColor: 'black',

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  resultados: {
    backgroundColor: '#7FFF00',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 10
  },
  resultadosText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  resetButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    width: 100,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  titleContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
    height: 1,
    width: 0
    },
    marginHorizontal: 10,
    marginVertical: 10
    }
});

export default App;
