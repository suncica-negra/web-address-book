<template>
   <div class="container pt-5">
      <div class="mt-5">
         <img :src="image" title="Source: pngfuel.com" /> 
         <p> Meet the new generation address book.</p>
         <p>Enter your new contacts, edit existing contacts, delete old contacts.</p>
         <p>Keep all your dear people and their data in one place.</p>
         <br>
         <br>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nisl libero. Sed ornare elit et augue mattis egestas. Nunc in ipsum quis orci aliquam venenatis sit amet ac ipsum. Etiam vitae leo sagittis massa suscipit mattis ut at dolor. Nullam eu metus tristique, facilisis turpis vitae, blandit sem. Morbi malesuada leo eu dapibus faucibus. Aliquam tortor erat, vehicula non leo a, feugiat rhoncus elit. Donec non lacus ultrices, congue nulla non, hendrerit odio. Nunc a maximus mi. Vestibulum scelerisque metus id urna bibendum porttitor. Nullam lacinia facilisis interdum. Sed semper, lacus non sodales tincidunt, enim diam tincidunt enim, eget ultricies magna nisl sed neque.</p>
         <p>Nam risus lorem, tincidunt sed urna in, hendrerit dictum eros. In velit nisi, accumsan feugiat sollicitudin vel, maximus at velit. Quisque malesuada leo non imperdiet ultrices. Phasellus sit amet elit sed nisi varius laoreet a sit amet tellus. Ut lacinia tincidunt arcu, vehicula congue nisl faucibus et. Nullam ac libero luctus, rhoncus tellus a, bibendum neque. Duis vestibulum varius justo volutpat convallis.</p>
         <p>Quisque in ex felis. Sed libero neque, scelerisque non luctus non, pellentesque sed justo. Donec ac nulla porttitor, tempus purus quis, pulvinar nunc. Duis hendrerit maximus enim in feugiat. Proin eu tempor tortor, et lobortis augue. In pulvinar, dui ut facilisis tempor, augue dui ultricies nisl, non rhoncus nisi diam nec enim. Donec dui nunc, molestie et enim sit amet, viverra vestibulum augue. Nulla et massa mauris. Curabitur hendrerit pulvinar diam, ut condimentum erat feugiat sit amet. Mauris non lacus imperdiet, facilisis nisl quis, vestibulum arcu. Pellentesque ac arcu ut libero volutpat ullamcorper nec sed ex. Aliquam malesuada turpis ex, in ultrices ipsum ullamcorper quis. Nam viverra eget justo at scelerisque. Praesent ut arcu eu mi faucibus volutpat vel eu libero.</p>
         <p>Quisque in porta est. Morbi vel porta elit. Vivamus vulputate tellus nec mi congue, eleifend tempor ligula sagittis. Proin interdum fermentum quam, nec facilisis nisl iaculis at. Duis tempor sit amet est id malesuada. Quisque dapibus tincidunt tortor, et sodales ipsum feugiat in. Nullam consectetur, leo et dignissim vehicula, enim libero ultrices tortor, sit amet convallis elit nisi nec eros.</p>
         <p>Cras finibus pharetra tortor, sed aliquet nibh dictum vel. Quisque lacinia dignissim tellus at tempor. Ut efficitur porta erat id posuere. Nullam suscipit, ex eget commodo maximus, velit nisl cursus lorem, ut fringilla elit ligula sed erat. Donec sagittis mauris vel ipsum scelerisque, sed eleifend sem mattis. Phasellus quis purus ipsum. Etiam mollis lacinia malesuada. Fusce efficitur tellus finibus, tempor diam eu, imperdiet lectus. Donec id velit ante. Nunc bibendum nisl mauris, vel scelerisque sapien volutpat quis. Maecenas molestie, ex et placerat placerat, elit sem viverra diam, sed dignissim arcu velit quis urna. Donec ac tempus dui, id ornare arcu. Vivamus vel ultrices dolor, eget pretium sem. Donec imperdiet magna non sem pharetra, interdum varius nibh ullamcorper. Nam posuere turpis vitae est dignissim dictum.</p>
      </div>
   </div>
</template>

<script>
import Image from "../assets/addressbook.png";

export default {
  data() {
    return {
      image: Image
    }
  }
}
</script>

<style scoped>
img {
  float: left;
  margin-right: 50px;
}
</style>