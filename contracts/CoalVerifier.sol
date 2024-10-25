// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;
contract CoalVerifier {
    struct Train{
        uint _trainno;
        uint _weight;
        string _timestamp;
    }
    
     // Mapping to store Train structs with a unique ID as the key
    mapping(uint => Train) private trains;

    // Function to add a train with the current timestamp
    function addTrain(uint trainno, uint weight, string memory timestamp) public {
        trains[trainno] = Train({
            _trainno: trainno,
            _weight: weight,
            _timestamp: timestamp // Store the current timestamp
        });
    }

    // Function to retrieve train data by ID
    function getTrain(uint trainno) public view returns (uint, uint, string memory) {
        Train memory train = trains[trainno];
        return (train._trainno, train._weight, train._timestamp);
    }


    // Function to set a document hash with a unique identifier (e.g., a document ID or filename)
    
   
}
