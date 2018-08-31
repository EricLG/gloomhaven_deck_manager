import { Component, OnInit } from '@angular/core';
import { Card } from './../model/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})

export class CardsComponent implements OnInit {

  cards: Card[] = [];
  roles: String[] = ['Brute', 'Tinkerer', 'Spellweaver', 'Scoundrel', 'Mindthief', 'Cragheart'];

  constructor() { }

  ngOnInit() {
    console.log("INIT card component");
    this.getCardsList();
   }

   getCardsList() {
    this.importAllCards();
   }

   importAllCards() {
    //const allCards = this.nameCards();
    const allCards = this.nameCardsFew();
    allCards.forEach(filename => {
      const splitCardInfo = filename.split('-', 4);
      //console.log(splitCardInfo);
      this.cards.push( new Card( null, this.manageName(filename), splitCardInfo[1], '1', splitCardInfo[1], splitCardInfo[0]));
    });

    return true;
   }

   manageName(filename) {
     const regexName = /\d{3}-..-(.*).jpg/;
     const rawName = filename.match(regexName)[1];
     return rawName.replace(/-/g, ' ');
   }

   nameCardsFew() {
    return [
'099-SC-Cards-Swift-Bow.jpg',
'100-SC-Cards-Open-Wound.jpg',
'101-SC-Cards-Flintlock.jpg',
'102-SC-Cards-Hidden-Daggers.jpg',
'103-SC-Cards-Duelist\'s-Advance.jpg',
'104-SC-Cards-Flurry-of-Blades.jpg',
'105-SC-Cards-Gruesome-Advantage.jpg',
'106-SC-Cards-Cull-the-Weak.jpg',
'107-SC-Cards-Visage-of-the-Inevitable.jpg',
'108-SC-Cards-Crippling-Poison.jpg',
'109-SC-Cards-Burning-Oil.jpg',
'110-SC-Cards-Stick-to-the-Shadows.jpg',
'111-SC-Cards-Spring-the-Trap.jpg',
'112-SC-Cards-Stiletto-Storm.jpg',
'113-SC-Cards-Pain\'s-End.jpg',
'114-SC-Cards-Long-Con.jpg',
'115-SC-Cards-Watch-It-Burn.jpg',
'116-MT-Cards-Sumissive-Affliction.jpg',
'117-MT-Cards-Into-the-Night.jpg',
'118-MT-Cards-Fearsome-Blade.jpg',
'119-MT-Cards-Feedbacl-Loop.jpg',
'120-MT-Cards-Gnawing-Horde.jpg'
    ];
  }

   nameCards() {
    return [
      '000-BR-Cards-Back.jpg',
      '000-CH-Cards-Back.jpg',
      '000-MT-Cards-Back.jpg',
      '000-SC-Cards-Back.jpg',
      '000-SW-Cards-Back.jpg',
      '000-TI-Cards-Back.jpg',
      '001-BR-Cards-Trample.jpg',
      '002-BR-Cards-Eye-for-an-Eye.jpg',
      '003-BR-Cards-Sweeping-Blow.jpg',
      '004-BR-Cards-Provoking-Roar.jpg',
      '005-BR-Cards-Overwhelming-Assault.jpg',
      '006-BR-Cards-Grab-and-Go.jpg',
      '007-BR-Cards-Barding-Strength.jpg',
      '008-BR-Cards-Shield-Bash.jpg',
      '009-BR-Cards-Leaping-Cleave.jpg',
      '010-BR-Cards-Spare-Dagger.jpg',
      '011-BR-Cards-Skewer.jpg',
      '012-BR-Cards-Balanced-Measure.jpg',
      '013-BR-Cards-Wall-of-Doom.jpg',
      '014-BR-Cards-Fatal-Advance.jpg',
      '015-BR-Cards-Juggernaut.jpg',
      '016-BR-Cards-Hook-and-Chain.jpg',
      '017-BR-Cards-brute-Force.jpg',
      '018-BR-Cards-Unstoppable-Charge.jpg',
      '019-BR-Cards-Devastating-Hack.jpg',
      '020-BR-Cards-Whirlwind.jpg',
      '021-BR-Cards-Skirmishing-Maneuver.jpg',
      '022-BR-Cards-Quietus.jpg',
      '023-BR-Cards-Immovable-Phalanx.jpg',
      '024-BR-Cards-Defensive-Tactics.jpg',
      '025-BR-Cards-Crippling-Offensive.jpg',
      '026-BR-Cards-Frenzied-Onslaught.jpg',
      '027-BR-Cards-Selfish-Retribution.jpg',
      '028-BR-Cards-King-of-the-Hill.jpg',
      '029-BR-Cards-Face-Your-End.jpg',
      '030-TI-Cards-Proximity-Mine.jpg',
      '031-TI-Cards-Harmless-Contraption.jpg',
      '032-TI-Cards-Flamethrower.jpg',
      '033-TI-Cards-Hook-Gun.jpg',
      '034-TI-Cards-Ink-Bomb.jpg',
      '035-TI-Cards-Net-Shooter.jpg',
      '036-TI-Cards-Stun-Shot.jpg',
      '037-TI-Cards-Reinvigorating-Elixir.jpg',
      '038-TI-Cards-Restorative-Mist.jpg',
      '039-TI-Cards-Energizing-Tonic.jpg',
      '040-TI-Cards-Enhancement-Field.jpg',
      '041-TI-Cards-Toxic-Bolt.jpg',
      '042-TI-Cards-Reviving-Shock.jpg',
      '043-TI-Cards-Volatile-Concoction.jpg',
      '044-TI-Cards-Potent-Potables.jpg',
      '045-TI-Cards-Stamina-Booster.jpg',
      '046-TI-Cards-Disorienting-Flash.jpg',
      '047-TI-Cards-Tinkerer\'s-Tools.jpg',
      '048-TI-Cards-Crank-Bow.jpg',
      '049-TI-Cards-Dangerous-Contraption.jpg',
      '050-TI-Cards-Micro-Bots.jpg',
      '051-TI-Cards-Noxious-Vials.jpg',
      '052-TI-Cards-Disintegration-Beam.jpg',
      '053-TI-Cards-Gas-Canister.jpg',
      '054-TI-Cards-Auto-Turret.jpg',
      '055-TI-Cards-Murderous-Contraption.jpg',
      '056-TI-Cards-Curative-Aerosol.jpg',
      '057-TI-Cards-Jet-Propulsion.jpg',
      '058-TI-Cards-Harsh-Stimulants.jpg',
      '059-TI-Cards-Lethal-Injection.jpg',
      '060-TI-Cards-Chimeric-Formula.jpg',
      '061-SW-Cards-Fire-Orbs.jpg',
      '062-SW-Cards-Impaling-Eruption.jpg',
      '063-SW-Cards-Reviving-Ether.jpg',
      '064-SW-Cards-Freezing-Nova.jpg',
      '065-SW-Cards-Mana-Bolt.jpg',
      '066-SW-Cards-Frost-Armor.jpg',
      '067-SW-Cards-Flame-Strike.jpg',
      '068-SW-Cards-Ride-the-Wind.jpg',
      '069-SW-Cards-Crackling-Air.jpg',
      '070-SW-Cards-Hardened-Spikes.jpg',
      '071-SW-Cards-Aid-from-the-Ether.jpg',
      '072-SW-Cards-Flashing-Bust.jpg',
      '073-SW-Cards-Icy-Blast.jpg',
      '074-SW-Cards-Cold-Fire.jpg',
      '075-SW-Cards-Elemental-Aid.jpg',
      '076-SW-Cards-Spirit-of-Doom.jpg',
      '077-SW-Cards-Forked-Beam.jpg',
      '078-SW-Cards-Chromatic-Explosion.jpg',
      '079-SW-Cards-Engulfed-in-Flames.jpg',
      '080-SW-Cards-Living-Torch.jpg',
      '081-SW-Cards-Frozen-Night.jpg',
      '082-SW-Cards-Twin-Restoration.jpg',
      '083-SW-Cards-Stone-Fists.jpg',
      '084-SW-Cards-ephyr-Wings.jpg',
      '085-SW-Cards-Cold-Front.jpg',
      '086-SW-Cards-Black-Hole.jpg',
      '087-SW-Cards-Inferno.jpg',
      '088-SC-Cards-Single-Out.jpg',
      '089-SC-Cards-Flanking-Strike.jpg',
      '090-SC-Cards-Smoke-Bomb.jpg',
      '091-SC-Cards-Backstab.jpg',
      '092-SC-Cards-Thief\'s-Knack.jpg',
      '093-SC-Cards-Venom-Shiv.jpg',
      '094-SC-Cards-Throwing-Knives.jpg',
      '095-SC-Cards-Quick-Hand.jpg',
      '096-SC-Cards-Special-Mixture.jpg',
      '097-SC-Cards-Sinister-Opportunity.jpg',
      '098-SC-Cards-Trickster\'s-Reversal.jpg',
      '099-SC-Cards-Swift-Bow.jpg',
      '100-SC-Cards-Open-Wound.jpg',
      '101-SC-Cards-Flintlock.jpg',
      '102-SC-Cards-Hidden-Daggers.jpg',
      '103-SC-Cards-Duelist\'s-Advance.jpg',
      '104-SC-Cards-Flurry-of-Blades.jpg',
      '105-SC-Cards-Gruesome-Advantage.jpg',
      '106-SC-Cards-Cull-the-Weak.jpg',
      '107-SC-Cards-Visage-of-the-Inevitable.jpg',
      '108-SC-Cards-Crippling-Poison.jpg',
      '109-SC-Cards-Burning-Oil.jpg',
      '110-SC-Cards-Stick-to-the-Shadows.jpg',
      '111-SC-Cards-Spring-the-Trap.jpg',
      '112-SC-Cards-Stiletto-Storm.jpg',
      '113-SC-Cards-Pain\'s-End.jpg',
      '114-SC-Cards-Long-Con.jpg',
      '115-SC-Cards-Watch-It-Burn.jpg',
      '116-MT-Cards-Sumissive-Affliction.jpg',
      '117-MT-Cards-Into-the-Night.jpg',
      '118-MT-Cards-Fearsome-Blade.jpg',
      '119-MT-Cards-Feedbacl-Loop.jpg',
      '120-MT-Cards-Gnawing-Horde.jpg',
      '121-MT-Cards-The-Minf\'s-Weakness.jpg',
      '122-MT-Cards-Parasitic-Influence.jpg',
      '123-MT-Cards-Scurry.jpg',
      '124-MT-Cards-Perverse-Edge.jpg',
      '125-MT-Cards-Empathetic-Assault.jpg',
      '126-MT-Cards-Withering-Claw.jpg',
      '127-MT-Cards-Possession.jpg',
      '128-MT-Cards-Frigid-Apparition.jpg',
      '129-MT-Cards-Wretched-Creature.jpg',
      '130-MT-Cards-Hostile-Takeover.jpg',
      '131-MT-Cards-Brain-Leech.jpg',
      '132-MT-Cards-Silent-Scream.jpg',
      '133-MT-Cards-Pilfer.jpg',
      '134-MT-Cards-Cranium-Overlord.jpg',
      '135-MT-Cards-Mass-Hysteria.jpg',
      '136-MT-Cards-Frozen-Mind.jpg',
      '137-MT-Cards-Corrupting-Embrace.jpg',
      '138-MT-Cards-Dark-Frenzy.jpg',
      '139-MT-Cards-Vicious-Blood.jpg',
      '140-MT-Cards-Psychic-Projection.jpg',
      '141-MT-Cards-Shared-Nightmare.jpg',
      '142-MT-Cards-Domination.jpg',
      '143-MT-Cards-Many-as-One.jpg',
      '144-MT-Cards-Phantasmal-Killer.jpg',
      '145-CH-Cards-Opposing-Strike.jpg',
      '146-CH-Cards-Crushing-Grasp.jpg',
      '147-CH-Cards-Avalanche.jpg',
      '148-CH-Cards-Rumbling-Advance.jpg',
      '149-CH-Cards-Massive-Boulder.jpg',
      '150-CH-Cards-Backup-Ammunition.jpg',
      '151-CH-Cards-Rock-Tunnel.jpg',
      '152-CH-Cards-Unstoppable-Upheaval.jpg',
      '153-CH-Cards-Crater.jpg',
      '154-CH-Cards-Dirt-Tornado.jpg',
      '155-CH-Cards-Earthen-Cloud.jpg',
      '156-CH-Cards-Heaving-Swing.jpg',
      '157-CH-Cards-Forceful-Storm.jpg',
      '158-CH-Cards-Nature\'s-Lift.jpg',
      '159-CH-Cards-Explosive-Punch.jpg',
      '160-CH-Cards-Sentient-Growth.jpg',
      '161-CH-Cards-Clear-the-Way.jpg',
      '162-CH-Cards-Blunt-Force.jpg',
      '163-CH-Cards-Rock-Slide.jpg',
      '164-CH-Cards-Kinetic-Assault.jpg',
      '165-CH-Cards-Petrify.jpg',
      '166-CH-Cards-Stone-Pummel.jpg',
      '167-CH-Cards-Dig-Pit.jpg',
      '168-CH-Cards-Cataclysm.jpg',
      '169-CH-Cards-Meteor.jpg',
      '170-CH-Cards-Brutal-Momentum.jpg',
      '171-CH-Cards-Rocky-End.jpg',
      '172-CH-Cards-Lumbering-Bash.jpg',
      '173-CH-Cards-Blind-Destruction.jpg',
      '174-CH-Cards-Pulverize.jpg',
    ];
   }
}