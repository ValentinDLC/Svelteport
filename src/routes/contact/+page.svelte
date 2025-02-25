<script>
    import { fly } from 'svelte/transition';
  
    let formData = {
      name: '',
      email: '',
      message: ''
    };
  
    function handleSubmit() {
      console.log('Formulaire soumis:', formData);
    }
  </script>
  
  <div in:fly="{{ y: 50, duration: 500 }}">
    <h1>Contact</h1>
    
    <form on:submit|preventDefault={handleSubmit} class="contact-form">
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          required
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          required
        />
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          bind:value={formData.message}
          rows="5"
          required
        ></textarea>
      </div>
      
      <button type="submit">Envoyer</button>
    </form>
  </div>
  
  <style>
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }
  
    .form-group {
      margin-bottom: 1.5rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  
    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
  
    button {
      padding: 0.75rem 1.5rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
  
    button:hover {
      background: #0056b3;
    }
  </style>
  