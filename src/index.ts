import 'module-alias/register';
import BST from '@modules/BST';

const bst = new BST();

bst.add(10);
bst.add(3);
bst.add(2);

bst.traverseInOrder(bst.root);